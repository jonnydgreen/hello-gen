import { dirname, EOL, fromFileUrl, Handlebars, join } from "../../deps.ts";
import { assertNever, MaybeNull, readFile } from "../../lib/index.ts";
import {
  ClassDef,
  EnumTypeDef,
  FieldArrayTypeDef,
  FieldScalarTypeDef,
  FieldTypeDef,
  FieldTypedefNodeData,
  FieldTypes,
  ImportTypeDefNodeData,
  ImportTypeDefSpecifier,
  Node,
  ObjectTypeDef,
  ObjectTypeDefNodeData,
  OpaqueTypeDef,
  ScalarTypeDef,
  TypeDef,
  Types,
  UnionTypeDef,
} from "./typescript.type.ts";

/**
 * TypeScript service.
 */
export class TypeScriptService {
  private readonly printer: Handlebars;

  constructor() {
    this.printer = Handlebars;
  }

  private static _template(templateName: string): string {
    return join(
      dirname(fromFileUrl(import.meta.url)),
      "templates",
      `${templateName}.ts.tpl`,
    );
  }

  /**
   * Create an Opaque type definition,
   */
  private _createOpaqueTypeDef(
    data: OpaqueTypeDef,
    comment: MaybeNull<string>,
  ): Node<OpaqueTypeDef> {
    return {
      template: TypeScriptService._template("opaque-type-def"),
      data: {
        ...data,
        comment,
      },
    };
  }

  /**
   * Create Maybe type node.
   */
  private _createMaybeTypeNode(
    renderedNode: string,
    nullable: boolean,
  ): string {
    if (nullable) {
      return `Maybe<${renderedNode}>`;
    }
    return renderedNode;
  }

  /**
   * Create MaybePromise type node.
   */
  private _createMaybePromiseTypeNode(
    renderedNode: string,
    promise: boolean,
  ): string {
    if (promise) {
      return `MaybePromise<${renderedNode}>`;
    }
    return renderedNode;
  }

  /**
   * Create Field Scalar node.
   */
  private _createFieldScalarTypeNode(field: FieldScalarTypeDef): string {
    switch (field.typeName) {
      case "Int":
      case "Float": {
        return "number";
      }
      case "String": {
        return "string";
      }
      case "Boolean": {
        return "boolean";
      }
      default: {
        return field.typeName;
      }
    }
  }

  /**
   * Create Field Array type node.
   */
  private _createFieldArrayTypeNode({
    element,
    ...field
  }: FieldArrayTypeDef): string {
    return `${this._renderFieldType({ ...field, ...element }, true)}[]`;
  }

  /**
   * Create Field type node.
   */
  private _renderFieldType(
    field: FieldTypeDef,
    useMaybe = false,
  ): string {
    let type: string;
    switch (field.type) {
      case FieldTypes.UNION:
      case FieldTypes.ENUM:
      case FieldTypes.OBJECT: {
        type = field.typeName;
        break;
      }
      case FieldTypes.SCALAR: {
        type = this._createFieldScalarTypeNode(field);
        break;
      }
      case FieldTypes.ARRAY: {
        type = this._createFieldArrayTypeNode(field);
        break;
      }
      default: {
        assertNever(field);
      }
    }
    if (useMaybe) {
      type = this._createMaybeTypeNode(type, field.nullable);
    }
    return type;
  }

  /**
   * Create Field type definition.
   */
  private async _createFieldTypeElement(
    field: FieldTypeDef,
  ): Promise<FieldTypedefNodeData> {
    let typeElement: Node;
    if (field.resolver === true) {
      typeElement = {
        template: TypeScriptService._template("field-resolver-type-def"),
        data: {
          ...field,
          type: this._createMaybePromiseTypeNode(
            this._createMaybeTypeNode(
              this._renderFieldType(field),
              field.nullable,
            ),
            field.promise,
          ),
        },
      };
    } else {
      typeElement = {
        template: TypeScriptService._template("field-type-def"),
        data: {
          ...field,
          type: this._createMaybePromiseTypeNode(
            this._renderFieldType(field),
            field.promise,
          ),
        },
      };
    }
    return {
      comment: field.comment,
      value: await this._renderNode(typeElement),
    };
  }

  /**
   * Create Object type definition.
   */
  private async _createObjectTypeDef(
    typeDef: ObjectTypeDef,
  ): Promise<Node<ObjectTypeDefNodeData>> {
    return {
      template: TypeScriptService._template("object-type-def"),
      data: {
        ...typeDef,
        fields: await Promise.all(
          typeDef.fields.map(this._createFieldTypeElement.bind(this)),
        ),
      },
    };
  }

  /**
   * Create Union type definition.
   */
  private _createUnionTypeDef(data: UnionTypeDef): Node<UnionTypeDef> {
    return {
      template: TypeScriptService._template("union-type-def"),
      data,
    };
  }

  /**
   * Create Enum type definition.
   */
  private _createEnumTypeDef(data: EnumTypeDef): Node<EnumTypeDef> {
    return {
      template: TypeScriptService._template("enum-type-def"),
      data,
    };
  }

  /**
   * Create Scalar type definition.
   */
  private _createScalarTypeDef(
    typeDef: ScalarTypeDef,
  ): Node<OpaqueTypeDef> {
    if (typeDef.name === "ID") {
      return this._createOpaqueTypeDef(
        { name: typeDef.name, type: "(string | number)" },
        typeDef.comment,
      );
    }
    return this._createOpaqueTypeDef(
      { name: typeDef.name, type: "any" },
      typeDef.comment,
    );
  }

  /**
   * Create utility type definitions to be shared throughout the generated typings.
   */
  public createUtilityTypeDefs(
    importDefs: Array<
      [string, ImportTypeDefSpecifier, ...ImportTypeDefSpecifier[]]
    >,
  ): Node[] {
    return [
      ...importDefs.map((importDef) => this.createImportTypeDef(...importDef)),
      this.createImportTypeDef("mercurius", {
        name: "MercuriusContext",
        specifier: "Context",
      }),
      { template: TypeScriptService._template("maybe-type-def"), data: {} },
      {
        template: TypeScriptService._template("maybe-promise-type-def"),
        data: {},
      },
      { template: TypeScriptService._template("parent-type-def"), data: {} },
    ];
  }

  /**
   * Create a type definition.
   */
  // TODO: add assertNever and remove undefined
  public async createTypeDef(typeDef: TypeDef): Promise<Node> {
    switch (typeDef.type) {
      case Types.OBJECT: {
        return await this._createObjectTypeDef(typeDef);
      }
      case Types.SCALAR: {
        return this._createScalarTypeDef(typeDef);
      }
      case Types.ENUM: {
        return this._createEnumTypeDef(typeDef);
      }
      case Types.UNION: {
        return this._createUnionTypeDef(typeDef);
      }
      default: {
        assertNever(typeDef);
      }
    }
  }

  public createClassDef(classDef: ClassDef): Node[] {
    return [
      ...classDef.imports.map(([moduleName, ...moduleImports]) =>
        this.createImportTypeDef(moduleName, ...moduleImports)
      ),
      {
        template: TypeScriptService._template("class-type-def"),
        data: classDef,
      },
    ];
  }

  /**
   * Create import type definitions.
   */
  public createImportTypeDef(
    module: string,
    ...namedImports: ImportTypeDefSpecifier[]
  ): Node<ImportTypeDefNodeData> {
    return {
      template: TypeScriptService._template("import-type-def"),
      data: {
        module,
        namedImports,
      },
    };
  }

  private async _renderNode(node: Node): Promise<string> {
    const template = await readFile(node.template);
    const render = await this.printer.compile(template);
    return render(node.data);
  }

  /**
   * Print a list of node definitions.
   */
  public async print(nodes: Node[]): Promise<string> {
    // TODO: use Deno emit to type check the files
    let result = "/* eslint-disable */";

    for (const node of nodes) {
      const renderedNode = await this._renderNode(node);
      result += `${EOL.LF}${EOL.LF}${renderedNode}`;
    }

    return result;
  }
}

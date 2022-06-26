import { IoC, TSMorph } from "deps";

export enum TemplateKind {
  INTERFACE = "INTERFACE",
  TYPE = "TYPE",
}

export interface TypeScriptInterfaceTemplateProperty {
  name: string;
  type: string;
  nullable: boolean;
}

export interface TypeScriptInterfaceTemplate {
  kind: TemplateKind.INTERFACE;
  name: string;
  properties: TypeScriptInterfaceTemplateProperty[];
}

export interface TypeScriptTypeTemplate {
  kind: TemplateKind.TYPE;
  name: string;
  type: string;
  typeParameters: string[];
}

export type TypeScriptTemplate =
  | TypeScriptInterfaceTemplate
  | TypeScriptTypeTemplate;

export interface TypeScriptTemplates {
  templates: TypeScriptTemplate[];
}

export function assertNever(_: never): never {
  // TODO: proper error
  throw new TypeError("Unable to infer template type");
}

@IoC.injectable()
export class TypeScriptService {
  private readonly _project: TSMorph.Project;

  constructor() {
    this._project = new TSMorph.Project();
  }

  // TODO: docstring
  private _print(
    sourceFile: TSMorph.SourceFile,
  ): string {
    return TSMorph.printNode(sourceFile.compilerNode);
  }

  // TODO: docstring
  private _renderInterface(
    sourceFile: TSMorph.SourceFile,
    template: TypeScriptInterfaceTemplate,
  ): void {
    sourceFile.addInterface({
      name: template.name,
      properties: template.properties.map((property) => ({
        name: property.name,
        type: property.type,
        hasQuestionToken: property.nullable,
      })),
      isExported: true,
    });
  }

  // TODO: docstring
  private _renderType(
    sourceFile: TSMorph.SourceFile,
    template: TypeScriptTypeTemplate,
  ): void {
    // TODO: update flow
    sourceFile.addTypeAlias({
      name: template.name,
      type: template.type,
      isExported: true,
      typeParameters: template.typeParameters.map((typeParameter) => ({
        name: typeParameter,
      })),
    });
  }

  // TODO: docstring
  public render(templates: TypeScriptTemplates): string {
    const sourceFile = this._project.createSourceFile("");
    for (const template of templates.templates) {
      const { kind } = template;
      switch (kind) {
        case TemplateKind.INTERFACE: {
          this._renderInterface(sourceFile, template);
          break;
        }
        case TemplateKind.TYPE: {
          this._renderType(sourceFile, template);
          break;
        }
        default: {
          return assertNever(kind);
        }
      }
    }

    return this._print(sourceFile);
  }
}

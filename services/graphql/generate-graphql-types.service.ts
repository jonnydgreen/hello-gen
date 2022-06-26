import { GraphQL, IoC } from "deps";
import {
  TemplateKind,
  TypeScriptInterfaceTemplateProperty,
  TypeScriptService,
  TypeScriptTemplate,
} from "../typescript/index.ts";

// TODO: type
export interface GraphQLType {
  name: string;
}

// TODO: utils
function upperFirst(input: string): string {
  if (input.length === 0) {
    return input;
  }
  return `${input[0].toUpperCase()}${input.slice(1)}`;
}

// TODO: utils
function getTypeName(type: GraphQL.GraphQLOutputType): string {
  const namedType = GraphQL.getNamedType(type);
  let typeName: string;
  switch (namedType.name) {
    case "String": {
      typeName = "string";
      break;
    }
    default: {
      typeName = namedType.name;
    }
  }

  if (GraphQL.isNonNullType(type)) {
    return typeName;
  }
  return `Maybe<${typeName}>`;
}

@IoC.injectable()
export class GenerateGraphQLTypesService {
  constructor(
    @IoC.inject(TypeScriptService) private readonly _typeScriptService:
      TypeScriptService,
  ) {}

  // TODO: proper type
  // TODO: proper abstraction
  // deno-lint-ignore no-explicit-any
  public async generate(input: any): Promise<void> {
    console.log("Generating GraphQL types");

    const rawSchema = await Deno.readTextFile(input.schema);

    const schema = GraphQL.buildSchema(rawSchema);
    // TODO: construct the

    const templates: TypeScriptTemplate[] = [
      {
        kind: TemplateKind.TYPE,
        name: "Resolver",
        type: "() => TReturnType | Promise<TReturnType>",
        typeParameters: ["TReturnType"],
      },
    ];
    for (const type of Object.values(schema.getTypeMap())) {
      if (GraphQL.isObjectType(type) && !type.name.startsWith("__")) {
        const properties: TypeScriptInterfaceTemplateProperty[] = [];
        for (const field of Object.values(type.getFields())) {
          const fieldTypeName = getTypeName(field.type);
          if (["Query", "Mutation", "Subscription"].includes(type.name)) {
            // TODO: better name - this is
            const objectTypeName = `${type.name}${
              upperFirst(field.name)
            }Resolver`;
            properties.push({
              name: field.name,
              type: objectTypeName,
              nullable: false,
            });
            templates.push({
              kind: TemplateKind.TYPE,
              name: objectTypeName,
              type: `Resolver<${fieldTypeName}>`,
              typeParameters: [],
            });
          } else {
            properties.push({
              name: field.name,
              type: fieldTypeName,
              nullable: false,
            });
          }
        }
        templates.push({
          kind: TemplateKind.INTERFACE,
          name: type.name,
          properties,
        });
      }
    }

    const renderedTypes = this._typeScriptService.render({ templates });

    await Deno.writeTextFile(input.output, renderedTypes);

    console.log(`Generated GraphQL types at '${input.output}'`);
  }
}

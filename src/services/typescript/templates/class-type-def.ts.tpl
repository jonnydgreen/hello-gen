export class {{@root.name}} implements {{@root.implementation}} {
  {{#each methods}}
  async {{this.name}}(argName: TypeName): Promise<ReturnType> {}
  {{/each}}
}
{{this.name}}{{#if nullable}}?{{/if}}(root: {{#if parent }}ParentType<{{@root.parent}}>{{else}}{}{{/if}}, args: {{this.argsInputName}}, context: Context, info: GraphQLResolveInfo): {{{this.type}}}
{{#if comment}}
/** {{this.comment}} */
{{/if}}
export type {{this.name}} = {{#each types}}{{this.name}}{{#unless @last}} | {{/unless}}{{/each}};
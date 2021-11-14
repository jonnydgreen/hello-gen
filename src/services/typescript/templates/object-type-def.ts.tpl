{{#if comment}}
/** {{this.comment}} */
{{/if}}
export interface {{this.name}} {
    {{#each fields}}
    {{#if this.comment}}
    /** {{{this.comment}}} */
    {{/if}}
    {{{this.value}}};
    {{/each}}
}
{{#if comment}}
/** {{{this.comment}}} */
{{/if}}
export enum {{this.name}} {
    {{#each values}}
    {{#if comment}}
    /** {{{this.comment}}} */
    {{/if}}
    {{this.name}} = "{{this.name}}"{{#unless @last}},{{/unless}}
    {{/each}}
}
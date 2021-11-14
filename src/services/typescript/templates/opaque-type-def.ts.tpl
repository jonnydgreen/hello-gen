{{#if comment}}
/** {{{this.comment}}} */
{{/if}}
export type {{this.name}} = {{this.type}} & {
    __opaque: "{{this.name}}";
};
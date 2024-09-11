/*
Language: Roc
Author: Isaac Van Doren
Website: https://roc-lang.org
Category: functional
*/

/** @type LanguageFn */
module.exports = (hljs) => {
  return {
    name: "Roc",
    keywords: {
      keyword:
        "if then else when is as crash debug import module exposing expect implements app package platform",
    },
    contains: [
      hljs.COMMENT("#", "$", { contains: [] }),
      {
        className: "symbol",
        begin:
          "->|<-|==|!=|>=|<=|&&|\\|\\|\\+|\\-|\\*|\\/|\\^|%|\\\\|\\.\\.|_|\\|>|\\?|\\!|:",
        relevance: 0,
      },
      {
        className: "string",
        begin: '"',
        end: '"',
        contains: [hljs.BACKSLASH_ESCAPE],
      },
      {
        className: "string",
        begin: '"""',
        end: '"""',
        contains: [hljs.BACKSLASH_ESCAPE],
      },
      {
        // This matches tags, types, and module names
        className: "type",
        begin: "\\b[A-Z][a-zA-Z0-9_]*\\b",
        relevance: 0,
      },
    ],
  };
};

/*
Language: Roc
Author: Isaac Van Doren
Website: https://roc-lang.org
Category: functional
*/

/** @type LanguageFn */
module.exports = (hljs) => {
  const INTERPOLATION = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [
      {
        begin: /(?<=\$\()/,
        end: /(?=\))/,
        subLanguage: "roc",
        className: "interpolation-content",
      },
    ],
  };

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
          "->|<-|==|!=|>=|<=|&&|\\|\\|\\+|\\-|\\*|\\/|\\^|%|\\\\|\\.\\.|_|\\|>|\\?|\\!|:|\\[|\\]|\\(|\\)|\\{|\\}",
      },
      {
        className: "string",
        begin: '"',
        end: '"',
        contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION],
      },
      {
        className: "string",
        begin: '"""',
        end: '"""',
        contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION],
      },
      {
        className: "char",
        begin: "'.",
        end: "'",
        illegal: "\\n",
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 0,
      },
      {
        className: "type",
        begin: "\\b[A-Z][a-zA-Z0-9_]*\\b",
      },
    ],
  };
};

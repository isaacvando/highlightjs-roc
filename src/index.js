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
  };
};

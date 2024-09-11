# highlightjs-roc

Syntax highlighting for Roc via highlight.js.

### Usage

```javascript
var hljs = require("highlightjs");
var hljsRoc = require("highlightjs-roc");

hljs.registerLanguage("roc", hljsRoc);
hljs.highlightAll();
```

After installing the package, you can use the default Roc theme by including the CSS file in your HTML:

```html
<link
  rel="stylesheet"
  href="path/to/node_modules/highlightjs-roc/styles/roc-default.css"
/>
```

Or if you're using a bundler, you can import it in your JavaScript:

```javascript
import "highlightjs-roc/styles/roc-default.css";
```

# highlightjs-roc

Syntax highlighting for Roc via highlight.js.

### Usage

To use the package with Node, import the module and register it with highlight.js:

```javascript
import hljs from "highlight.js";
import hljsRoc from "highlightjs-roc";

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

### Contributing

PRs are very welcome! An easy way to test your changes is to update [roc.js](./src/roc.js) or [roc-default.css](./styles/roc-default.css), and then run `node example/server.js` and open [localhost:3000](http://localhost:3000) to see your changes.

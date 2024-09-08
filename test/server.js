const express = require("express");
const hljs = require("highlight.js");
const hljsRoc = require("highlightjs-roc");

const app = express();
const port = 3000;

// Register your custom Roc language with highlight.js
hljs.registerLanguage("roc", hljsRoc);

app.get("/", (req, res) => {
  const rocCode = `
     app "Hello"
       imports [pf.Stdout]
       provides [main] to pf

     main =
       Stdout.line "Hello, world!"
   `;

  const highlighted = hljs.highlight(rocCode, { language: "roc" }).value;

  const html = `
     <!DOCTYPE html>
     <html>
       <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css">
         <style>
           pre { padding: 20px; background-color: #f0f0f0; }
         </style>
       </head>
       <body>
         <h1>Roc Syntax Highlighting Test</h1>
         <pre><code class="language-roc">${highlighted}</code></pre>
       </body>
     </html>
   `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

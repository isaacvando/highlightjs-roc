import express from "express";
import hljs from "highlight.js";
import hljsRoc from "highlightjs-roc";
import { fileURLToPath } from "url";
import path from "path";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

let rocCode;
try {
  rocCode = await readFile(path.join(__dirname, "example.roc"), "utf8");
} catch (error) {
  console.error("Error reading example.roc:", error);
  rocCode = "Error loading Roc sample code";
}

// Register your custom Roc language with highlight.js
hljs.registerLanguage("roc", hljsRoc);

// serve static files
app.use("/highlightjs-roc", express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
  const highlighted = hljs.highlight(rocCode, { language: "roc" }).value;

  const html = `
     <!DOCTYPE html>
     <html>
       <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/default.min.css">
         <link rel="stylesheet" href="/highlightjs-roc/styles/roc-default.css">
       </head>
       <body>
         <h1>Roc Syntax Highlighting Test</h1>
         <pre><code class="hljs">${highlighted}</code></pre>
       </body>
     </html>
   `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

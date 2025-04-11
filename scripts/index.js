// Convert textarea#html to a CodeMirror instance
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
  mode: "htmlmixed",
  theme: "material",
  lineNumbers: true,
  lineWrapping: true,
});
htmlEditor.setValue(localStorage.getItem("html") || "<h1>Welcome to codepen!</h1>");

// Convert textarea#css to a CodeMirror instance
const cssEditor = CodeMirror.fromTextArea(document.getElementById("css"), {
  mode: "css",
  theme: "material",
  lineNumbers: true,
  lineWrapping: true,
});
cssEditor.setValue(localStorage.getItem("css") || "h1 { color: red; }");

// Convert textarea#js to a CodeMirror instance
const jsEditor = CodeMirror.fromTextArea(document.getElementById("js"), {
  mode: "javascript",
  theme: "material",
  lineNumbers: true,
  lineWrapping: true,
});
jsEditor.setValue(localStorage.getItem("js") || "console.log('Welcome to codepen!');");

function updatePreview() {
  const htmlContent = htmlEditor.getValue() || localStorage.getItem("html");
  const cssContent = cssEditor.getValue() || localStorage.getItem("css");
  const jsContent = jsEditor.getValue() || localStorage.getItem("js");
  localStorage.setItem("html", htmlContent);
  localStorage.setItem("css", cssContent);
  localStorage.setItem("js", jsContent);

  const iframe = document.getElementById("preview");
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  const content = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          ${cssContent} 
        </style>
      </head>
      <body>
        ${htmlContent} 
         <script>
          ${jsContent}
        </script>
      </body>
    </html>
  `;

  iframeDoc.open();
  iframeDoc.write(content);
  iframeDoc.close();
}

htmlEditor.on("change", updatePreview);
cssEditor.on("change", updatePreview);
jsEditor.on("change", updatePreview);

updatePreview();

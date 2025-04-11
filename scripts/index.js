// Convert textarea#html to a CodeMirror instance
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
  mode: "htmlmixed",
  theme: "material",
  lineNumbers: true,
  lineWrapping: true,
});

// Convert textarea#css to a CodeMirror instance
const cssEditor = CodeMirror.fromTextArea(document.getElementById("css"), {
  mode: "css",
  theme: "material",
  lineNumbers: true,
  lineWrapping: true,
});

// Convert textarea#js to a CodeMirror instance
const jsEditor = CodeMirror.fromTextArea(document.getElementById("js"), {
  mode: "javascript",
  theme: "material",
  lineNumbers: true,
  lineWrapping: true,
});


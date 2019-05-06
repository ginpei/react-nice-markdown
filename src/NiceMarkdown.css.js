module.exports = `
.Markdown-Container code:not(.hljs) {
  background-color: gainsboro;
  border-radius: 2px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  padding: 0 0.4em;
}
.Markdown-Container blockquote {
  background-color: ghostwhite;
  border-left: 0.4em solid gainsboro;
  margin-left: 1em;
  padding-left: 1em;
}
.Markdown-Container h1 .header-anchor,
.Markdown-Container h2 .header-anchor,
.Markdown-Container h3 .header-anchor,
.Markdown-Container h4 .header-anchor,
.Markdown-Container h5 .header-anchor,
.Markdown-Container h6 .header-anchor {
  visibility: hidden;
}
.Markdown-Container h1:hover .header-anchor,
.Markdown-Container h2:hover .header-anchor,
.Markdown-Container h3:hover .header-anchor,
.Markdown-Container h4:hover .header-anchor,
.Markdown-Container h5:hover .header-anchor,
.Markdown-Container h6:hover .header-anchor {
  visibility: visible;
}
.Markdown-Container > .table-of-contents {
  background-color: cornsilk;
  border: 2px solid burlywood;
  font-size: 0.8em;
}
.Markdown-Container > .table-of-contents ol {
  padding-left: 2em;
}
`;

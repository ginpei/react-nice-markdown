export const cssContent = `
.ginpei-NiceMarkdown code:not(.hljs) {
  background-color: gainsboro;
  border-radius: 2px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  padding: 0 0.4em;
}
.ginpei-NiceMarkdown blockquote {
  background-color: ghostwhite;
  border-left: 0.4em solid gainsboro;
  margin-left: 1em;
  padding-left: 1em;
}
.ginpei-NiceMarkdown h1 .header-anchor,
.ginpei-NiceMarkdown h2 .header-anchor,
.ginpei-NiceMarkdown h3 .header-anchor,
.ginpei-NiceMarkdown h4 .header-anchor,
.ginpei-NiceMarkdown h5 .header-anchor,
.ginpei-NiceMarkdown h6 .header-anchor {
  visibility: hidden;
}
.ginpei-NiceMarkdown h1:hover .header-anchor,
.ginpei-NiceMarkdown h2:hover .header-anchor,
.ginpei-NiceMarkdown h3:hover .header-anchor,
.ginpei-NiceMarkdown h4:hover .header-anchor,
.ginpei-NiceMarkdown h5:hover .header-anchor,
.ginpei-NiceMarkdown h6:hover .header-anchor {
  visibility: visible;
}
.ginpei-NiceMarkdown > .table-of-contents {
  background-color: cornsilk;
  border: 2px solid burlywood;
  font-size: 0.8em;
}
.ginpei-NiceMarkdown > .table-of-contents ol {
  padding-left: 2em;
}
`;

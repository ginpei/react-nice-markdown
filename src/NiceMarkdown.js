// @ts-check

const hljs = require('highlight.js');
// @ts-ignore
const HtmlToReactParser = require('html-to-react').Parser;
const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const React = require('react');

function setUpStylesheet () {
  const stylesheetText = require('./NiceMarkdown.css.js');

  const elOldStyle = document.querySelector('#NiceMarkdown-style');
  if (elOldStyle) {
    elOldStyle.parentNode && elOldStyle.parentNode.removeChild(elOldStyle);
  }

  const elStyle = document.createElement('style');
  elStyle.id = 'NiceMarkdown-style';
  elStyle.textContent = stylesheetText;
  document.head.appendChild(elStyle);

  const elOldLink = document.querySelector('#NiceMarkdown-highlight');
  if (elOldLink) {
    elOldLink.parentNode && elOldLink.parentNode.removeChild(elOldLink);
  }

  const elLink = document.createElement('link');
  elLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-dark.min.css';
  elLink.id = 'NiceMarkdown-highlight';
  elLink.rel = 'stylesheet';
  document.head.appendChild(elLink);
}

module.exports = class NiceMarkdown extends React.Component {
  get contentHtml () {
    return this.mdit.render(this.props.content || '');
  }

  /**
   * @param {INiceMarkdownProps} props
   */
  constructor (props) {
    super(props);

    /** @type {INiceMarkdownProps} */
    this.props;

    this.mdit = new MarkdownIt({
      highlight: (text, language) => {
        if (language && hljs.getLanguage(language)) {
          try {
            const highlighted = hljs.highlight(language, text).value;
            return highlighted;
          } catch (error) {
            console.error(error);
          }
        }

        return '';
      },
      html: true,
      langPrefix: 'hljs ',
      linkify: true,
    });
    this.mdit.use(markdownItAnchor, {
      permalink: true,
    });

    this.htmlToReactParser = new HtmlToReactParser();

    setUpStylesheet();
  }

  render () {
    /** @type {string} */
    const html = this.htmlToReactParser.parse(this.contentHtml);
    return React.createElement(
      'div',
      { className: 'Markdown-Container' },
      html,
    );

  }
}

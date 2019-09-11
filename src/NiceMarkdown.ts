import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import React from 'react';
import { cssContent } from './NiceMarkdown.css';

// it does not have type declarations
const HtmlToReactParser = require('html-to-react').Parser;

type Props = {
  content: string;
};

function setUpStylesheet () {
  const elOldStyle = document.querySelector('#NiceMarkdown-style');
  if (elOldStyle) {
    elOldStyle.parentNode && elOldStyle.parentNode.removeChild(elOldStyle);
  }

  const elStyle = document.createElement('style');
  elStyle.id = 'NiceMarkdown-style';
  elStyle.textContent = cssContent;
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

export default class NiceMarkdown extends React.Component<Props> {
  private htmlToReactParser = new HtmlToReactParser();

  private mdit = new MarkdownIt({
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

  get contentHtml () {
    return this.mdit.render(this.props.content || '');
  }

  constructor (props: Props) {
    super(props);

    this.mdit.use(markdownItAnchor, {
      permalink: true,
    });

    setUpStylesheet();
  }

  render () {
    const html: string = this.htmlToReactParser.parse(this.contentHtml);
    return React.createElement(
      'div',
      { className: 'ginpei-NiceMarkdown' },
      html,
    );
  }
}

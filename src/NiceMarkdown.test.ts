import React from 'react';
import { createRoot } from 'react-dom/client';
import NiceMarkdown from './NiceMarkdown';

describe('NiceMarkdown', () => {
  let elMarkdown: HTMLDivElement;

  async function render(content: string) {
    const elArea = document.createElement('div');
    const root = createRoot(elArea);

    const component = React.createElement(
      NiceMarkdown,
      { content },
    );
    root.render(component);

    await tick();
    elMarkdown = elArea.firstChild as HTMLDivElement;
  }

  describe('wrapper', () => {
    beforeEach(() => render('Hi'));

    it('renders with class name', () => {
      expect(elMarkdown.className).toBe('ginpei-NiceMarkdown');
    });
  });

  describe('hljs', () => {
    beforeEach(() => render('```ts\nconst foo = 123;\n```'));

    it('renders with syntax highlight', () => {
      const elPre = elMarkdown.firstChild as HTMLElement;
      const elCode = elPre.firstChild as HTMLElement;
      expect(elCode.className).toBe('hljs ts');
    });
  });

  describe('markdown-it-anchor', () => {
    beforeEach(() => render('# Heading'));

    it('renders with syntax highlight', () => {
      const elHeading = elMarkdown.firstChild as HTMLElement;
      const textNode = elHeading.childNodes[0] as Text;
      const elAnchor = elHeading.childNodes[1] as HTMLElement;
      expect(textNode.nodeValue).toBe('Heading ');
      expect(elAnchor.getAttribute('href')).toBe('#heading');
    });
  });
});

function tick() {
  return new Promise((f) => setTimeout(f, 1));
}

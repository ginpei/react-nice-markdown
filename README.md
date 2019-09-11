# @ginpei/react-nice-markdown

![](https://github.com/ginpei/react-nice-markdown/workflows/Node%20CI/badge.svg)

## Install

```console
$ npm i @ginpei/react-nice-markdown
```

## Usage

```tsx
import NiceMarkdown from '@ginpei/react-nice-markdown';
```

```tsx
render () {
  const content = `
    # Hello World!

    This is a [React](http://reactjs.org/) component.
  `;
  return <NiceMarkdown content={content} />;
}
```

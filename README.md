# mrkdwny

Parser for turning markdown into HTML.

## Install

```sh
npm i mrkdwny
```

## Usage

```ts
import { parseMarkdown } from 'mrkdwny';
// or the following if you are using mjs/ts
const parseMarkdown = require('mrkdwny').parseMarkdown;

const dummyMarkdown = `
---
title: markdown-example
---
# This is a h1 heading

This is a paragraph
`;

const result = parseMarkdown(fileContent);

console.log(result.metadata);
// { title: 'markdown-example' }

console.log(result.html);
//<h1>This is a h1 heading</h1>
// <p>This is a paragraph</p>
```

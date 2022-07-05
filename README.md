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

## This is a h2 heading

### This is a h3 heading

#### This is a h4 heading

##### This is a h5 heading

###### This is a h6 heading

This is a paragraph

[this is a link](https://mhouge.dk)

this is a paragraph with a link inside [link](https://google.com) :D 

![this is the alt tag](https://mhouge.dk/logo.png)

<!-- Single line comments are removed -->

<!-- Multi line
    comments are
    removed too
-->
`;

const result = parseMarkdown(fileContent);

console.log(result.metadata);
// { title: 'markdown-example' }

console.log(result.html);
// <h1>This is a h1 heading</h1>
// <h2>This is a h2 heading</h2>
// <h3>This is a h3 heading</h3>
// <h4>This is a h4 heading</h4>
// <h5>This is a h5 heading</h5>
// <h6>This is a h6 heading</h6>
// <p>This is a paragraph</p>
// <p><a href="https://mhouge.dk">this is a link</a></p>
// <p>this is a paragraph with a link inside <a href="https://google.com">link</a> :D</p>
// <img src="https://mhouge.dk/logo.png" alt="this is the alt tag" />
```

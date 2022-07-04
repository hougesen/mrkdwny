# mrkdwny

Parser for turning markdown into JavaScript objects.

## Install

```sh
npm i mrkdwny
```

## Usage

```ts
import parseMarkdown from 'mrkdwny';
import { readFileSync } from 'fs';

const fileContent = readFileSync('markdown_file.md', 'utf8');

const { markdown, metadata } = parseMarkdown(fileContent);
```

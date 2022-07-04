import { describe, it } from 'vitest';
import { parseDocument } from '../src/lib/markdown/parseDocument';
import { readFileSync } from 'fs';
import { validateDummyMarkdown } from './utils/validateDummyMarkdown';

describe('parseDocument.ts', () => {
    it.todo('Should give correct value', () => {
        const unparsedMarkdown = readFileSync(`${__dirname}/mock-data/dummy_markdown.md`, 'utf8');

        const parsedMarkdown = parseDocument(unparsedMarkdown);
        validateDummyMarkdown(parsedMarkdown);
    });
});

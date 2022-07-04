import { readFileSync } from 'fs';
import { describe, expect, it } from 'vitest';

import { parseMarkdown } from '../src/index';
import { validateDummyMarkdown } from './utils/validateDummyMarkdown';

describe('parseMarkdown.ts', () => {
    it('Parse markdown with meta', () => {
        const unparsedMetaData = readFileSync(`${__dirname}/mock-data/dummy_meta.md`, 'utf8');
        const unparsedMarkdown = readFileSync(`${__dirname}/mock-data/dummy_markdown.md`, 'utf8');

        const { markdown, metadata } = parseMarkdown(unparsedMetaData + '\n' + unparsedMarkdown);

        validateDummyMarkdown(markdown);

        // Strings
        expect(metadata).toHaveProperty('title', 'dummy-title');

        // Numbers
        expect(metadata).toHaveProperty('numeric_value', 12);

        // Dates
        expect(metadata).toHaveProperty('string_date', new Date('02-02-2021'));
        expect(metadata).toHaveProperty('iso_date', new Date('2022-07-04T15:50:00.577Z'));
    });

    it('Parse markdown without meta', () => {
        const fileContent = readFileSync(`${__dirname}/mock-data/dummy_markdown.md`, 'utf8');

        const { markdown, metadata } = parseMarkdown(fileContent);

        validateDummyMarkdown(markdown);

        expect(metadata).toBeUndefined();
    });
});

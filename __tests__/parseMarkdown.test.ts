import { describe, expect, it } from 'vitest';
import { parseMarkdown } from '../src/lib/parseMarkdown';
import { readFileSync, writeFile } from 'fs';
import { TMarkdownElement } from '../src/lib/markdown/parseLine';

function validateMarkdown(output: TMarkdownElement[]) {
    for (const element of output) {
        switch (element.tag) {
            case 'p':
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
                expect(element.tag).toEqual(element.text);
                break;
            case 'img':
                expect(element.src).toBe('src');
                expect(element.alt).toBe('alt');
                break;
            case 'a':
                expect(element.text).toBe('text');
                expect(element.href).toBe('href');
                break;
            // @ts-expect-error unimplemented
            case 'code':
                break;
            default:
                expect("this shouldn't be able to happen").toBe('a valid tag');
                break;
        }
    }
}

describe('parseMarkdown.ts', () => {
    it('Parse markdown with meta', () => {
        const unparsedMetaData = readFileSync(`${__dirname}/dummy_meta.md`, 'utf8');
        const unparsedMarkdown = readFileSync(`${__dirname}/dummy_markdown.md`, 'utf8');

        const { markdown, metadata } = parseMarkdown(unparsedMetaData + '\n' + unparsedMarkdown);

        validateMarkdown(markdown);

        // Strings
        expect(metadata).toHaveProperty('title', 'dummy-title');

        // Numbers
        expect(metadata).toHaveProperty('numeric_value', 12);

        // Dates
        expect(metadata).toHaveProperty('string_date', new Date('02-02-2021'));
        expect(metadata).toHaveProperty('iso_date', new Date('2022-07-04T15:50:00.577Z'));

        writeFile('./parsedMarkdown.json', JSON.stringify({ markdown, metadata }), (error) => {
            if (error) {
                console.error('Error saving markdown');
            }
        });
    });

    it('Parse markdown without meta', () => {
        const fileContent = readFileSync(`${__dirname}/dummy_markdown.md`, 'utf8');

        const { markdown, metadata } = parseMarkdown(fileContent);

        validateMarkdown(markdown);

        expect(metadata).toBeUndefined();
    });
});

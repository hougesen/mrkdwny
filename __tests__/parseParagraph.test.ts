import { describe, expect, it } from 'vitest';

import { parseLine } from '../src/utils/parseLine';
import { parseParagraph } from '../src/utils/parseParagraph';

const dummyText = 'dummy text ';

const dummyLinkMarkdown = '[link-text](https://mhouge.dk)';
const dummyLinkHtml = '<a href="https://mhouge.dk">link-text</a>';

const dummyImageMarkdown = '![image alt](https://mhouge.dk/logo.png)';
const dummyImageHtml = '<img src="https://mhouge.dk/logo.png" alt="image alt" />';

const dummyBoldText = '<strong>bold</strong>';
const dummyBoldUnderscoreMarkdown = '__bold__';
const dummyBoldAsteriskMarkdown = '**bold**';

describe('parseParagraph', () => {
    it('Only a paragraph', () => {
        expect(parseParagraph('dummy text')).toEqual('<p>' + dummyText.trim() + '</p>');
    });

    it('Paragraph with link', () => {
        expect(parseParagraph(dummyText + dummyLinkMarkdown)).toEqual(
            '<p>' + (dummyText + dummyLinkHtml).trim() + '</p>'
        );
    });

    it('Paragraph with image', () => {
        expect(parseParagraph(dummyText + dummyImageMarkdown)).toEqual(
            '<p>' + (dummyText + dummyImageHtml).trim() + '</p>'
        );
    });

    it('Mixed paragraph', () => {
        expect(parseParagraph(dummyText + dummyLinkMarkdown + dummyImageMarkdown)).toEqual(
            '<p>' + (dummyText + dummyLinkHtml + dummyImageHtml).trim() + '</p>'
        );
    });

    it('image+image', () => {
        expect(parseLine(dummyImageMarkdown + dummyImageMarkdown)).toEqual(
            '<p>' + dummyImageHtml + dummyImageHtml + '</p>'
        );
    });

    it('link+link', () => {
        expect(parseLine('[link 1](https://mhouge.dk)[link 2](https://google.com)')).toEqual(
            '<p><a href="https://mhouge.dk">link 1</a><a href="https://google.com">link 2</a></p>'
        );
    });

    it('underscore bold', () => {
        expect(parseParagraph(dummyBoldUnderscoreMarkdown)).toEqual('<p>' + dummyBoldText + '</p>');
    });

    it('sterisk bold', () => {
        expect(parseParagraph(dummyBoldAsteriskMarkdown)).toEqual('<p>' + dummyBoldText + '</p>');
    });

    it('para with mixed bold', () => {
        expect(parseParagraph(dummyBoldAsteriskMarkdown + dummyBoldUnderscoreMarkdown)).toEqual(
            '<p>' + dummyBoldText + dummyBoldText + '</p>'
        );
    });

    it('para with multiple bold', () => {
        expect(parseParagraph(dummyBoldUnderscoreMarkdown + dummyBoldUnderscoreMarkdown)).toEqual(
            '<p>' + dummyBoldText + dummyBoldText + '</p>'
        );
    });
});

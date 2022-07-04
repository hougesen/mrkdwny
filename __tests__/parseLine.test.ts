import { describe, expect, it } from 'vitest';
import { IMarkdownElementImage, IMarkdownElementText, parseLine } from '../src/lib/markdown/parseLine';

describe('parseLine.ts', () => {
    it('p', () => {
        const { tag, text } = parseLine('paragraph') as IMarkdownElementText;

        expect(tag).toEqual('p');

        expect(text).toEqual('paragraph');
    });

    it.todo('a', () => {
        // TODO: validate a tag
    });

    it('img', () => {
        const { tag, src, alt } = parseLine('![alt tag](https://mhouge.dk/logo.png)') as IMarkdownElementImage;

        expect(tag).toEqual('img');

        expect(alt).toEqual('alt tag');

        expect(src).toEqual('https://mhouge.dk/logo.png');
    });

    it.todo('li', () => {
        // TODO: validate list test
    });

    it('h1', () => {
        const { tag, text } = parseLine('# heading 1') as IMarkdownElementText;

        expect(tag).toEqual('h1');

        expect(text).toEqual('heading 1');
    });

    it('h2', () => {
        const { tag, text } = parseLine('## heading 2') as IMarkdownElementText;

        expect(tag).toEqual('h2');

        expect(text).toEqual('heading 2');
    });

    it('h3', () => {
        const { tag, text } = parseLine('### heading 3') as IMarkdownElementText;

        expect(tag).toEqual('h3');

        expect(text).toEqual('heading 3');
    });

    it('h4', () => {
        const { tag, text } = parseLine('#### heading 4') as IMarkdownElementText;

        expect(tag).toEqual('h4');

        expect(text).toEqual('heading 4');
    });

    it('h5', () => {
        const { tag, text } = parseLine('##### heading 5') as IMarkdownElementText;

        expect(tag).toEqual('h5');

        expect(text).toEqual('heading 5');
    });

    it('h6', () => {
        const { tag, text } = parseLine('###### heading 6') as IMarkdownElementText;

        expect(tag).toEqual('h6');

        expect(text).toEqual('heading 6');
    });
});

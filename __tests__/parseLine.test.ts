import { describe, expect, it } from 'vitest';

import { parseLine } from '../src/lib/parseLine';
import mockResults from './mock-data/mockResults';

describe('parseLine.ts', () => {
    it('validate mock results', () => {
        for (const { markdown, html } of mockResults) {
            expect(parseLine(markdown)).toEqual(html);
        }
    });

    it('p', () => {
        const html = parseLine('paragraph');

        expect(html).toEqual('<p>paragraph</p>');
    });

    it('a', () => {
        // TODO: validate a tag

        const html = parseLine('[link text](https://mhouge.dk)');

        expect(html).toEqual('<p><a href="https://mhouge.dk">link text</a></p>');
    });

    it('img', () => {
        const html = parseLine('![alt tag](https://mhouge.dk/logo.png)');

        expect(html).toEqual('<img src="https://mhouge.dk/logo.png" alt="alt tag" />');
    });

    it.todo('li', () => {
        // TODO: validate list test
    });

    it('h1', () => {
        const html = parseLine('# heading 1');

        expect(html).toEqual('<h1>heading 1</h1>');
    });

    it('h2', () => {
        const html = parseLine('## heading 2');

        expect(html).toEqual('<h2>heading 2</h2>');
    });

    it('h3', () => {
        const html = parseLine('### heading 3');

        expect(html).toEqual('<h3>heading 3</h3>');
    });

    it('h4', () => {
        const html = parseLine('#### heading 4');

        expect(html).toEqual('<h4>heading 4</h4>');
    });

    it('h5', () => {
        const html = parseLine('##### heading 5');

        expect(html).toEqual('<h5>heading 5</h5>');
    });

    it('h6', () => {
        const html = parseLine('###### heading 6');

        expect(html).toEqual('<h6>heading 6</h6>');
    });
});

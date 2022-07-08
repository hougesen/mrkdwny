import { benchSync } from 'picobench';
import { describe, expect, it } from 'vitest';

import { parseLine } from '../src/utils/parseLine';
import mockResults from './mock-data/mockResults';

describe('parseLine.ts', () => {
    it('validate mock results', () => {
        for (const { markdown, html } of mockResults) {
            expect(parseLine(markdown)).toEqual(html);

            const benchmarkResult = benchSync(() => parseLine(markdown));

            expect(benchmarkResult.average).toBeLessThanOrEqual(1);
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
    it('Valid markdown link', () => {
        const html = parseLine('[this is the link text](https://google.com)');

        expect(html).toEqual('<p><a href="https://google.com">this is the link text</a></p>');
    });

    it('Link with text between', () => {
        const html = parseLine('left [link 1](https://mhouge.dk) right');

        expect(html).toEqual('<p>left <a href="https://mhouge.dk">link 1</a> right</p>');
    });

    it('Multiple links', () => {
        const html = parseLine('[link 1](https://mhouge.dk)[link 2](https://google.com)');

        expect(html).toEqual('<p><a href="https://mhouge.dk">link 1</a><a href="https://google.com">link 2</a></p>');
    });

    it('Multiple links with text between', () => {
        const html = parseLine('left [link 1](https://mhouge.dk) middle [link 2](https://google.com) right');

        expect(html).toEqual(
            '<p>left <a href="https://mhouge.dk">link 1</a> middle <a href="https://google.com">link 2</a> right</p>'
        );
    });

    it('img', () => {
        const html = parseLine('![alt tag](https://mhouge.dk/logo.png)');

        // TODO: figure out if this is wanted behavior
        expect(html).toEqual('<p><img src="https://mhouge.dk/logo.png" alt="alt tag" /></p>');
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

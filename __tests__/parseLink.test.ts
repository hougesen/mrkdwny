import { describe, expect, it } from 'vitest';

import { parseLink } from '../src/utils/parseLink';

describe('parseLink.ts', () => {
    it('Valid markdown link', () => {
        const html = parseLink('[this is the link text](https://google.com)');

        expect(html).toEqual('<p><a href="https://google.com">this is the link text</a></p>');
    });

    it('Link with text between', () => {
        const html = parseLink('left [link 1](https://mhouge.dk) right');

        expect(html).toEqual('<p>left <a href="https://mhouge.dk">link 1</a> right</p>');
    });

    it('Multiple links', () => {
        const html = parseLink('[link 1](https://mhouge.dk)[link 2](https://google.com)');

        expect(html).toEqual('<p><a href="https://mhouge.dk">link 1</a><a href="https://google.com">link 2</a></p>');
    });

    it('Multiple links with text between', () => {
        const html = parseLink('left [link 1](https://mhouge.dk) middle [link 2](https://google.com) right');

        expect(html).toEqual(
            '<p>left <a href="https://mhouge.dk">link 1</a> middle <a href="https://google.com">link 2</a> right</p>'
        );
    });
});

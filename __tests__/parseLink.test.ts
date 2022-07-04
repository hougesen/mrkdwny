import { describe, expect, it } from 'vitest';

import { parseLink } from '../src/lib/parseLink';

describe('parseLink.ts', () => {
    it('Valid markdown link', () => {
        const { tag, href, text } = parseLink('[this is the link text](https://google.com)');

        expect(tag).toEqual('a');

        expect(href).toEqual('https://google.com');

        expect(text).toEqual('this is the link text');
    });
});

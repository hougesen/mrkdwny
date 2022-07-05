import { describe, expect, it } from 'vitest';

import { generateATag } from '../src/utils/generateATag';

describe('generateATag.ts', () => {
    it('Valid markdown link', () => {
        const html = generateATag('[this is the link text](https://google.com)');

        expect(html).toEqual('<a href="https://google.com">this is the link text</a>');
    });
});

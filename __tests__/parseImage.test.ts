import { describe, expect, it } from 'vitest';

import { parseImage } from '../src/lib/parseImage';

describe('parseImage.ts', () => {
    it('return valid element', () => {
        const html = parseImage('![text](/image.png)');

        expect(html).toEqual('<img src="/image.png" alt="text" />');
    });
});

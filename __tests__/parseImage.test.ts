import { describe, expect, it } from 'vitest';

import { parseImage } from '../src/lib/parseImage';

describe('parseImage.ts', () => {
    it('return valid element', () => {
        const { tag, src, alt } = parseImage('![text](/image.png)');

        expect(tag).toBe('img');
        expect(alt).toBe('text');
        expect(src).toBe('/image.png');
    });
});

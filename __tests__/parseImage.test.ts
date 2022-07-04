import { describe, expect, it } from 'vitest';
import { parseImage } from '../src/lib/markdown/parseImage';

describe('parseImage.ts', () => {
    it.todo('return valid element', () => {
        const element1 = parseImage('![text](/image.png)');
    });
});

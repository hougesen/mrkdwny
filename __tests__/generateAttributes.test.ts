import { describe, expect, it } from 'vitest';
import { generateAttributes } from '../src/utils/generateAttributes';

describe('generateAttributes', () => {
    it('h1 element', () => {
        expect(
            generateAttributes({
                h1: {
                    class: 'heading bold',
                    style: 'text-align:center;',
                },
            })
        ).toHaveProperty('h1', ' class="heading bold" style="text-align:center;"');
    });
});

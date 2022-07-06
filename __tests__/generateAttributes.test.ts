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

    it('h2 element', () => {
        expect(
            generateAttributes({
                h2: {
                    class: 'heading bold',
                    style: 'text-align:center;',
                },
            })
        ).toHaveProperty('h2', ' class="heading bold" style="text-align:center;"');
    });

    it('h3 element', () => {
        expect(
            generateAttributes({
                h3: {
                    class: 'heading bold',
                    style: 'text-align:center;',
                },
            })
        ).toHaveProperty('h3', ' class="heading bold" style="text-align:center;"');
    });

    it('h2 element', () => {
        expect(
            generateAttributes({
                h4: {
                    class: 'heading bold',
                    style: 'text-align:center;',
                },
            })
        ).toHaveProperty('h4', ' class="heading bold" style="text-align:center;"');
    });

    it('h2 element', () => {
        expect(
            generateAttributes({
                h5: {
                    class: 'heading bold',
                    style: 'text-align:center;',
                },
            })
        ).toHaveProperty('h5', ' class="heading bold" style="text-align:center;"');
    });

    it('h2 element', () => {
        expect(
            generateAttributes({
                h6: {
                    class: 'heading bold',
                    style: 'text-align:center;',
                },
            })
        ).toHaveProperty('h6', ' class="heading bold" style="text-align:center;"');
    });
});

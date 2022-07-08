import { describe, expect, it } from 'vitest';
import { benchSync } from 'picobench';
import { generateATag } from '../src/utils/generateATag';

describe('generateATag.ts', () => {
    const dummyMarkdown1 = '[this is the link text](https://google.com)';
    const dummyHtml1 = '<a href="https://google.com">this is the link text</a>';

    it('Valid markdown link', () => {
        const html = generateATag(dummyMarkdown1);

        expect(html).toEqual(dummyHtml1);
    });

    it('Benchmark generateATag', () => {
        const benchmark = benchSync(() => {
            generateATag(dummyMarkdown1);
        });

        expect(benchmark.average).toBeLessThan(1);
    });
});

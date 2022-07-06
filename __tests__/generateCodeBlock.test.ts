import { describe, expect, it } from 'vitest';

import { generateCodeBlock } from '../src/utils/generateCodeBlock';

describe('generateCodeBlock.ts', () => {
    it('valid code block ', () => {
        const languages = ['', 'js', 'ts', 'java', 'rust'];

        for (const language of languages) {
            expect(generateCodeBlock(['```' + language, 'const x = 10;', 'const y = Math.pow(x,x);', '```'])).toEqual(
                `<code${
                    language ? `lang="${language}" class="codeblock codeblock--${language}"` : ''
                }>const x = 10; <br /> const y = Math.pow(x,x);</code>`
            );
        }
    });
});

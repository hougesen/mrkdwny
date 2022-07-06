import { readFile } from 'fs/promises';
import { describe, expect, it } from 'vitest';

import { IMrkdwnyOptions } from '../src';
import { parseDocument } from '../src/utils/parseDocument';
import mockResults from './mock-data/mockResults';

const dummyOptions: IMrkdwnyOptions = {
    elements: {
        p: {
            class: 'text',
            style: 'text-align: center',
        },
        a: {
            target: '_blank',
            rel: 'noopener noreferrer',
            referrerpolicy: 'true',
        },
        strong: {
            class: 'bold',
        },
        em: {
            class: 'italic',
        },
        img: {
            loading: 'lazy',
        },
        h1: {
            class: 'heading1',
            style: 'text-align: center',
        },
        h2: {
            class: 'heading2',
            style: 'text-align: center',
        },
        h3: {
            class: 'heading3',
            style: 'text-align: center',
        },
        h4: {
            class: 'heading4',
            style: 'text-align: center',
        },
        h5: {
            class: 'heading5',
            style: 'text-align: center',
        },
        h6: {
            class: 'heading6',
            style: 'text-align: center',
        },
    },
};

describe('parseDocument.ts', async () => {
    const dummyMarkdownWithCode = await readFile(`${__dirname}/mock-data/dummy_with_code.md`, 'utf8');

    const dummyMarkdownWithCodeHtml =
        '<p>This is before the code block</p><code lang="js" class="codeblock codeblock--js">const x = 10; <br /> const y = x * x;</code><p>This is after the code block</p>';

    it('validate mock results', () => {
        for (const { markdown, html } of mockResults) {
            expect(parseDocument(markdown)).toEqual(html);
        }
    });

    it('validate that heading options work', () => {
        for (let i = 1; i <= 6; i += 1) {
            expect(parseDocument(` heading ${i}`.padStart(` heading ${i}`.length + i, '#'), dummyOptions)).toEqual(
                `<h${i} class="heading${i}" style="text-align: center">heading ${i}</h${i}>`
            );
        }
    });

    it('validate that paragraph options work', () => {
        expect(parseDocument('this is a paragraph', dummyOptions)).toEqual(
            '<p class="text" style="text-align: center">this is a paragraph</p>'
        );
    });

    it('validate that img options work', () => {
        expect(parseDocument('![alt](src)', dummyOptions)).toEqual(
            '<p class="text" style="text-align: center"><img src="src" alt="alt" loading="lazy" /></p>'
        );
    });

    it('validate that a options work', () => {
        expect(parseDocument('[text](href)', dummyOptions)).toEqual(
            '<p class="text" style="text-align: center"><a href="href" target="_blank" rel="noopener noreferrer" referrerpolicy="true">text</a></p>'
        );
    });

    it('validate that em options work', () => {
        expect(parseDocument('*italic text*', dummyOptions)).toEqual(
            '<p class="text" style="text-align: center"><em class="italic">italic text</em></p>'
        );

        expect(parseDocument('_italic text_', dummyOptions)).toEqual(
            '<p class="text" style="text-align: center"><em class="italic">italic text</em></p>'
        );
    });

    it('validate that strong options work', () => {
        expect(parseDocument('**bold text**', dummyOptions)).toEqual(
            '<p class="text" style="text-align: center"><strong class="bold">bold text</strong></p>'
        );
        expect(parseDocument('__bold text__', dummyOptions)).toEqual(
            '<p class="text" style="text-align: center"><strong class="bold">bold text</strong></p>'
        );
    });

    it('validate that codeblocks work', () => {
        expect(parseDocument(dummyMarkdownWithCode)).toEqual(dummyMarkdownWithCodeHtml);
    });

    it("validate that whitespace doesn't matter", () => {
        expect(
            parseDocument(
                dummyMarkdownWithCode
                    ?.split('\n')
                    ?.filter((l) => l?.trim()?.length)
                    ?.join('\n') ?? ''
            )
        ).toEqual(dummyMarkdownWithCodeHtml);
    });

    it('validate that multiple codeblocks work', () => {
        expect(parseDocument(dummyMarkdownWithCode + '\n' + dummyMarkdownWithCode)).toEqual(
            dummyMarkdownWithCodeHtml + dummyMarkdownWithCodeHtml
        );
    });
});

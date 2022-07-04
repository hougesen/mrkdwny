import { describe, expect, it } from 'vitest';
import { removeCommments } from '../src/lib/markdown/removeComments';

const singleLineComment = '<!-- single line comment -->';
const multiLineComment = '<!-- \n multi line comment \n -->';

describe('removeComments.ts', () => {
    it('Ignore text without comments', () => {
        const textWithoutComment = `
        this is line 1
        this is line 2
        this is line 3`;

        expect(removeCommments(textWithoutComment)).toEqual(textWithoutComment);
    });

    it('Should remove empty comments', () => {
        expect(removeCommments('<!---->')?.trim()).toEqual('');

        expect(removeCommments('<!-- -->')?.trim()).toEqual('');
    });

    it('Should work on single line comments', () => {
        expect(removeCommments(singleLineComment)?.trim()).toEqual('');
    });

    it('Should work on multi line comment', () => {
        expect(removeCommments(multiLineComment)?.trim()).toEqual('');
    });

    it("Shouldn't remove text that is outside comment", () => {
        expect(removeCommments(multiLineComment + "\nthis shouldn't be removed\ntest\n\n")?.trim()).toEqual(
            "this shouldn't be removed\ntest"
        );
    });
});

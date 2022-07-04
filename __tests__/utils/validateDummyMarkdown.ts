import { expect } from 'vitest';

import { TMarkdownElement } from '../../src/lib/parseLine';

export function validateDummyMarkdown(output: TMarkdownElement[]) {
    for (const element of output) {
        switch (element.tag) {
            case 'p':
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
                expect(element.tag).toEqual(element.text);
                break;
            case 'img':
                expect(element.src).toBe('src');
                expect(element.alt).toBe('alt');
                break;
            case 'a':
                expect(element.text).toBe('text');
                expect(element.href).toBe('href');
                break;
            // @ts-expect-error unimplemented
            case 'code':
                break;
            default:
                expect("this shouldn't be able to happen").toBe('a valid tag');
                break;
        }
    }
}

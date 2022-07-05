import { describe, expect, it } from 'vitest';

import { parseDocument } from '../src/lib/parseDocument';
import mockResults from './mock-data/mockResults';

describe('parseDocument.ts', () => {
    it('validate mock results', () => {
        for (const { markdown, html } of mockResults) {
            expect(parseDocument(markdown)).toEqual(html);
        }
    });
});

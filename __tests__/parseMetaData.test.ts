import { describe, expect, it } from 'vitest';
import { parseMetaData } from '../src/lib/markdown/parseMetaData';
import { readFileSync } from 'fs';

export const METARegex = /(.*: )/;

describe('parseMetaData.ts', () => {
    it('output valid metadata', () => {
        const dummyMetaData = readFileSync(`${__dirname}/dummy_meta.md`, 'utf8');
        const result = parseMetaData(dummyMetaData);

        // Strings
        expect(result).toHaveProperty('title', 'dummy-title');

        // Numbers
        expect(result).toHaveProperty('numeric_value', 12);

        // Dates
        expect(result).toHaveProperty('string_date', new Date('02-02-2021'));
        expect(result).toHaveProperty('iso_date', new Date('2022-07-04T15:50:00.577Z'));
    });

    it.todo('invalid');
});

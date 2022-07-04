import { describe, expect, it } from 'vitest';
import { validateDate } from '../src/lib/validateDate';

describe('validateDate.ts', () => {
    it('Date objects should return true', () => expect(validateDate(new Date())).toEqual(true));

    it('ISO strings should return true', () => expect(validateDate(new Date().toISOString())).toEqual(true));

    it('Epoch ms should return true', () => expect(validateDate(new Date().getTime())).toEqual(true));

    it('Date strings should return true', () => {
        expect(validateDate('02-02-2021')).toEqual(true);

        expect(validateDate('02/02/2021')).toEqual(true);
    });

    it('Non date strings should return false', () => expect(validateDate('this is not a real date')).toEqual(false));

    it('Arrays should return false', () => {
        expect(validateDate([])).toEqual(false);
        // TODO: ADD actual dates to array
        expect(validateDate([{ key: 'value' }, 'string'])).toEqual(false);
    });

    it('Objects should return false', () => {
        expect(validateDate({})).toEqual(false);

        expect(validateDate({ key: 'hello' })).toEqual(false);
    });

    it('NaN should return false', () => expect(validateDate(NaN)).toEqual(false));
});

export function validateDate(input: unknown): boolean {
    if (!(typeof input === 'string' || typeof input === 'number' || input instanceof Date)) {
        return false;
    }

    const asDate = new Date(input);

    return asDate.toString() !== 'Invalid Date' && !Number.isNaN(asDate.getTime());
}

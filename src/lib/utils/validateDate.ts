export function validateDate(unvalidatedDate: unknown): boolean {
    // TODO: fix this
    // @ts-expect-error breaks a lot of data type rules
    return new Date(unvalidatedDate) !== 'Invalid Date' && !isNaN(new Date(unvalidatedDate));
}

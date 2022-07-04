import { parseLine } from './parseLine';
import { removeCommments } from './removeComments';

export function parseDocument(lines: string) {
    const withoutComments = removeCommments(lines);

    const elements = [];

    for (const line of withoutComments?.trim()?.split('\n')) {
        if (line?.length) {
            elements.push(parseLine(line));
        }
    }

    return elements;
}

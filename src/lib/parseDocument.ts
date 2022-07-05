import { parseLine } from './parseLine';
import { removeCommments } from './removeComments';

export function parseDocument(fileContent: string): string {
    const withoutComments = removeCommments(fileContent)?.trim()?.split('\n');

    let html = '';

    for (const line of withoutComments) {
        if (line?.length) {
            html += parseLine(line);
        }
    }

    return html;
}

import { IMrkdwnyOptions } from '..';
import { generateAttributes } from './generateAttributes';
import { parseLine } from './parseLine';
import { removeCommments } from './removeComments';

export function parseDocument(fileContent: string, options: IMrkdwnyOptions = {}): string {
    const withoutComments = removeCommments(fileContent)?.trim()?.split('\n');

    const attributes = generateAttributes(options);

    let html = '';

    for (const line of withoutComments) {
        if (line?.length) {
            html += parseLine(line, attributes);
        }
    }

    return html;
}

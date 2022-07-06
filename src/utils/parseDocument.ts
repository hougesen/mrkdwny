import { IMrkdwnyOptions } from '../';
import { generateAttributes } from './generateAttributes';
import { generateCodeBlock } from './generateCodeBlock';
import { parseLine } from './parseLine';
import { removeCommments } from './removeComments';

export function parseDocument(fileContent: string, options: IMrkdwnyOptions = {}): string {
    const lines = removeCommments(fileContent)?.trim()?.split('\n');

    const attributes = generateAttributes(options?.elements);

    let html = '';

    for (let i = 0; i < lines.length; i += 1) {
        if (lines[i]?.length) {
            if (lines[i].startsWith('```')) {
                let codeEnd = i;

                for (let j = i + 1; j < lines.length; j += 1) {
                    if (lines[j].startsWith('```')) {
                        codeEnd = j;
                        break;
                    }
                }

                if (i !== codeEnd) {
                    const codeLines = lines.splice(i, codeEnd - i + 1);

                    html += generateCodeBlock(codeLines, attributes?.code ?? '');

                    i -= 1;

                    continue;
                }
            }

            html += parseLine(lines[i], attributes);
        }
    }

    return html;
}

import { IMrkdwnyOptions } from '../';
import { parseParagraph } from './parseParagraph';
import { H1Regex, H2Regex, H3Regex, H4Regex, H5Regex, H6Regex } from './regex';

export function parseLine(line: string, attributes: { [key: string]: string } = {}): string {
    let element: keyof IMrkdwnyOptions = 'p';
    let text = '';

    if (H1Regex.test(line)) {
        element = 'h1';
        text = line?.replace('# ', '')?.trim() ?? '';
    } else if (H2Regex.test(line)) {
        element = 'h2';
        text = line?.replace('## ', '')?.trim() ?? '';
    } else if (H3Regex.test(line)) {
        element = 'h3';
        text = line?.replace('### ', '')?.trim() ?? '';
    } else if (H4Regex.test(line)) {
        element = 'h4';
        text = line?.replace('#### ', '')?.trim() ?? '';
    } else if (H5Regex.test(line)) {
        element = 'h5';
        text = line?.replace('##### ', '')?.trim() ?? '';
    } else if (H6Regex.test(line)) {
        element = 'h6';
        text = line?.replace('###### ', '')?.trim() ?? '';
    } else if (line?.trim()?.length) {
        return parseParagraph(line, attributes);
    }

    if (text?.length) {
        return `<${element}${attributes[element] ?? ''}>${text}</${element}>`;
    }

    return '';
}

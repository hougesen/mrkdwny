import { IMrkdwnyElementOptions } from '../';
import { ElementAttributes } from './generateAttributes';
import { parseParagraph } from './parseParagraph';
import { H1Regex, H2Regex, H3Regex, H4Regex, H5Regex, H6Regex } from './regex';

export function parseLine(line: string, attributes: ElementAttributes = {}): string {
    let element: keyof IMrkdwnyElementOptions = 'p';
    let text = '';
    let elementAttributes = '';

    if (H1Regex.test(line)) {
        element = 'h1';
        text = line?.replace('# ', '')?.trim() ?? '';
        elementAttributes = attributes?.h1 ?? '';
    } else if (H2Regex.test(line)) {
        element = 'h2';
        text = line?.replace('## ', '')?.trim() ?? '';
        elementAttributes = attributes?.h2 ?? '';
    } else if (H3Regex.test(line)) {
        element = 'h3';
        text = line?.replace('### ', '')?.trim() ?? '';
        elementAttributes = attributes?.h3 ?? '';
    } else if (H4Regex.test(line)) {
        element = 'h4';
        text = line?.replace('#### ', '')?.trim() ?? '';
        elementAttributes = attributes?.h4 ?? '';
    } else if (H5Regex.test(line)) {
        element = 'h5';
        text = line?.replace('##### ', '')?.trim() ?? '';
        elementAttributes = attributes?.h5 ?? '';
    } else if (H6Regex.test(line)) {
        element = 'h6';
        text = line?.replace('###### ', '')?.trim() ?? '';
        elementAttributes = attributes?.h6 ?? '';
    } else if (line?.trim()?.length) {
        return parseParagraph(line, attributes);
    }

    if (text?.length) {
        return `<${element}${elementAttributes}>${text}</${element}>`;
    }

    return '';
}

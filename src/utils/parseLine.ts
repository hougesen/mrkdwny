import { IMrkdwnyOptions } from '../';
import { parseImage } from './parseImage';
import { parseLink } from './parseLink';
import { H1Regex, H2Regex, H3Regex, H4Regex, H5Regex, H6Regex, IMGRegex, LINKRegex } from './regex';

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
    } else if (IMGRegex.test(line)) {
        return parseImage(line, attributes?.img ?? '');
    } else if (LINKRegex.test(line)) {
        return parseLink(line, attributes);
    } else if (line?.trim()?.length) {
        text = line?.trim();
    }

    if (text?.length) {
        return `<${element}${attributes[element] ?? ''}>${text}</${element}>`;
    }

    return '';
}

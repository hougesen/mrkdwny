import { IMrkdwnyOptions } from '..';
import { LINKRegex } from './regex';

// TODO: handle title [text](https://l.ink "title")
export function generateATag(line: string, options?: IMrkdwnyOptions['a']): string {
    const linkParts = line?.replace('[', '')?.replace(')', '');

    const [text, href, _] = linkParts.split('](');

    let attributes = '';

    if (options?.class?.length && typeof options?.class === 'string') {
        attributes += ` class="${options?.class}"`;
    }

    if (options?.style?.length && typeof options?.style === 'string') {
        attributes += ` style="${options?.style}"`;
    }

    return `<a href="${href}"${attributes}>${text}</a>`;
}

export function parseLink(line: string, options?: IMrkdwnyOptions): string {
    let attributes = '';

    if (options?.p?.class?.length && typeof options?.p?.class === 'string') {
        attributes += ` class="${options?.p?.class}"`;
    }

    if (options?.p?.style?.length && typeof options?.p?.style === 'string') {
        attributes += ` style="${options?.p?.style}"`;
    }

    let element = `<p${attributes}>`;

    while (line.length) {
        const matched = line.match(LINKRegex);

        if (matched?.length) {
            const [before, after] = line.split(matched[0]);

            const linkElement = generateATag(matched[0], options?.a);

            element += before;
            element += linkElement;
            line = after;
        } else {
            element += line;
            break;
        }
    }

    element += '</p>';

    return element;
}

import { LINKRegex } from './regex/regexes';

// TODO: handle title [text](https://l.ink "title")
export function generateATag(line: string): string {
    const linkParts = line?.replace('[', '')?.replace(')', '');

    const [text, href, _] = linkParts.split('](');

    return `<a href="${href}">${text}</a>`;
}

export function parseLink(line: string): string {
    let element = '<p>';

    while (line.length) {
        const matched = line.match(LINKRegex);

        if (matched?.length) {
            const [before, after] = line.split(matched[0]);

            const linkElement = generateATag(matched[0]);

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

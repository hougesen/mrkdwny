import { IMarkdownElementLink } from './parseLine';

// TODO: handle title [text](https://l.ink "title")
export function parseLink(line: string): IMarkdownElementLink {
    const linkParts = line?.replace('[', '')?.replace(')', '');

    const [text, href, ..._] = linkParts.split('](');

    // TODO: figure out why type bugs out
    return {
        tag: 'a',
        text,
        href,
    };
}

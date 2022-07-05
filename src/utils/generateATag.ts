// TODO: handle title [text](https://l.ink "title")
export function generateATag(line: string, attributes = ''): string {
    const linkParts = line?.replace('[', '')?.replace(')', '');

    const [text, href, _] = linkParts.split('](');

    return `<a href="${href}"${attributes ?? ''}>${text}</a>`;
}

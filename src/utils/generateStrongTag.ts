export function generateStrongTag(line: string, type: string, attributes = ''): string {
    if (type === '_') {
        return line?.replace('__', `<strong${attributes}>`)?.replace('__', '</strong$>');
    }

    if (type === '*') {
        return line?.replace('**', `<strong${attributes}>`)?.replace('**', '</strong>');
    }

    return '';
}

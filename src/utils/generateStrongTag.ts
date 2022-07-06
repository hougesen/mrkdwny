export function generateStrongTag(line: string, type: string): string {
    if (type === '_') {
        return line?.replace('__', '<strong>')?.replace('__', '</strong>');
    }

    if (type === '*') {
        return line?.replace('**', '<strong>')?.replace('**', '</strong>');
    }

    return '';
}

export function generateStrongTag(line: string, type: string, attributes = ''): string {
    return line?.replace(type, `<strong${attributes}>`)?.replace(type, '</strong>');
}

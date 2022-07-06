export function generateEmTag(text: string, attributes = ''): string {
    const trimmed = text?.trim() ?? '';

    return `<em${attributes}>${trimmed.slice(1, trimmed.length - 1)}</em>`;
}

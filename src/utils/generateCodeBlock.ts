export function generateCodeBlock(code: string[], attributes = ''): string {
    const language = code?.shift()?.replace('```', '')?.trim() ?? '';

    if (language?.length) {
        if (attributes?.includes('class="')) {
            attributes.replace('class="', `class="codeblock codeblock--${language}`);
        } else {
            attributes += ` class="codeblock codeblock--${language}"`;
        }
    }

    code.pop();

    return `<code${language ? ` lang="${language}"` : ''}${attributes}>${code
        ?.filter((l) => l?.trim()?.length && l?.includes('```') === false)
        ?.join(' <br /> ')}</code>`;
}

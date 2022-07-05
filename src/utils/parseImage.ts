export function parseImage(text: string): string {
    const imageParts = text?.replace('![', '')?.replace(')', '');

    const [alt, src] = imageParts?.split('](');

    return `<img src="${src}" alt="${alt}" />`;
}

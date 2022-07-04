import { IMarkdownElementImage } from './parseLine';

export function parseImage(text: string): IMarkdownElementImage {
    const imageParts = text?.replace('![', '')?.replace(')', '');

    const [alt, src] = imageParts?.split('](');

    return {
        tag: 'img',
        src,
        alt,
    };
}

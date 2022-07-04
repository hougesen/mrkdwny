import { parseImage } from './parseImage';
import { parseLink } from './parseLink';
import { H1Regex, H2Regex, H3Regex, H4Regex, H5Regex, H6Regex, IMGRegex, LINKRegex } from './regex/regexes';

export type TMarkdownElement = IMarkdownElementText | IMarkdownElementLink | IMarkdownElementImage;

export interface IMarkdownElementText {
    tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    text: string;
    children?: TMarkdownElement[];
}

export interface IMarkdownElementLink {
    tag: 'a';
    href: string;
    text: string;
}

export interface IMarkdownElementImage {
    tag: 'img';
    src: string;
    alt: string;
}

export function parseLine(line: string): IMarkdownElementText | IMarkdownElementLink | IMarkdownElementImage {
    if (H1Regex.test(line)) {
        return {
            tag: 'h1',
            text: line?.replace('# ', '')?.trim() ?? '',
        };
    }

    if (H2Regex.test(line)) {
        return {
            tag: 'h2',
            text: line?.replace('## ', '')?.trim() ?? '',
        };
    }

    if (H3Regex.test(line)) {
        return {
            tag: 'h3',
            text: line?.replace('### ', '')?.trim() ?? '',
        };
    }

    if (H4Regex.test(line)) {
        return {
            tag: 'h4',
            text: line?.replace('#### ', '')?.trim() ?? '',
        };
    }

    if (H5Regex.test(line)) {
        return {
            tag: 'h5',
            text: line?.replace('##### ', '')?.trim() ?? '',
        };
    }

    if (H6Regex.test(line)) {
        return {
            tag: 'h6',
            text: line?.replace('###### ', '')?.trim() ?? '',
        };
    }

    if (IMGRegex.test(line)) {
        return parseImage(line);
    }

    // TODO: FIX LINK REGEX
    // TODO: Add nested links
    /* if (LINKRegex.test(line)) {
        const parts = line?.trim()?.split(' ');

        return (
            <p class={tw`text__flip`}>
                {parts.map((p) => {
                    if (LINKRegex.test(p)) {
                        const { linkLocation, linkText } = parseLink(p);

                        return (
                            <a href={linkLocation} target='_blank' rel='noopener noreferrer' class={tw`text__flip`}>
                                {' '}
                                {linkText}{' '}
                            </a>
                        );
                    } else {
                        return ` ${p} `;
                    }
                })}
            </p>
        );
    } */

    return {
        tag: 'p',
        text: line?.trim(),
    };
}

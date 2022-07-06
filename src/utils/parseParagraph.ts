import { generateATag } from './generateATag';
import { generateStrongTag } from './generateStrongTag';
import { parseImage } from './parseImage';
import { BOLDUAsteriskRegex, BOLDUnderscoreRegex, IMGRegex, LINKRegex } from './regex';

export function parseParagraph(line: string, attributes: { [key: string]: string } = {}): string {
    // TODO: cleanup this mess

    // Bold with __underscore__
    while (BOLDUnderscoreRegex.test(line)) {
        const matched = line.match(BOLDUnderscoreRegex);

        if (matched?.length) {
            line = line.replace(matched[0], generateStrongTag(matched[0], '_'));
        }
    }

    // Bold with **asterisk**
    while (BOLDUAsteriskRegex.test(line)) {
        const matched = line.match(BOLDUAsteriskRegex);

        if (matched?.length) {
            line = line.replace(matched[0], generateStrongTag(matched[0], '*'));
        }
    }

    // Images
    while (IMGRegex.test(line)) {
        const matched = line.match(IMGRegex);

        if (matched?.length) {
            line = line.replace(matched[0], parseImage(matched[0], attributes?.img ?? ''));
        }
    }

    // A tags
    while (LINKRegex.test(line)) {
        const matched = line.match(LINKRegex);

        if (matched?.length) {
            line = line.replace(matched[0], generateATag(matched[0], attributes?.a ?? ''));
        }
    }

    if (line?.length) {
        return `<p${attributes?.p ?? ''}>${line?.trim() ?? ''}</p>`;
    }

    return '';
}

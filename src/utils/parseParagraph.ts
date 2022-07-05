import { generateATag } from './generateATag';
import { parseImage } from './parseImage';
import { IMGRegex, LINKRegex } from './regex';

export function parseParagraph(line: string, attributes: { [key: string]: string } = {}): string {
    while (IMGRegex.test(line)) {
        const matched = line.match(IMGRegex);

        if (matched?.length) {
            line = line.replace(matched[0], parseImage(matched[0], attributes?.img ?? ''));
        } else {
            break;
        }
    }

    while (LINKRegex.test(line)) {
        const matched = line.match(LINKRegex);

        if (matched?.length) {
            line = line.replace(matched[0], generateATag(matched[0], attributes?.a ?? ''));
        } else {
            break;
        }
    }

    if (line?.length) {
        return `<p${attributes?.p ?? ''}>${line}</p>`;
    }

    return '';
}

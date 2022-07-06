import { generateATag } from './generateATag';
import { ElementAttributes } from './generateAttributes';
import { generateEmTag } from './generateEmTag';
import { generateStrongTag } from './generateStrongTag';
import { parseImage } from './parseImage';
import {
    BOLDAsteriskRegex,
    BOLDEMAsterisRegex,
    BOLDEMUnderscoreRegex,
    BOLDUnderscoreRegex,
    EMAsteriskRegex,
    EMUnderscoreRegex,
    IMGRegex,
    LINKRegex,
} from './regex';

export function parseParagraph(line: string, attributes: ElementAttributes = {}): string {
    // TODO: cleanup this mess

    // Bold and em line
    /**@example ___bold and italic___ */
    while (BOLDEMUnderscoreRegex.test(line)) {
        const matched = line.match(BOLDEMUnderscoreRegex);

        if (matched?.length) {
            const strongTag = generateStrongTag(
                matched[0].slice(1, matched[0].length - 1),
                '__',
                attributes?.strong ?? ''
            );

            line = line.replace(matched[0], generateEmTag(`*${strongTag}*`, attributes?.em ?? ''));
        }
    }

    /**@example ***bold and italic*** */
    while (BOLDEMAsterisRegex.test(line)) {
        const matched = line.match(BOLDEMAsterisRegex);

        if (matched?.length) {
            const strongTag = generateStrongTag(
                matched[0].slice(1, matched[0].length - 1),
                '**',
                attributes?.strong ?? ''
            );

            line = line.replace(matched[0], generateEmTag(`*${strongTag}*`, attributes?.em ?? ''));
        }
    }

    // Em with _underscore_
    while (EMUnderscoreRegex.test(line)) {
        const matched = line.match(EMUnderscoreRegex);

        if (matched?.length) {
            line = line.replace(matched[0], generateEmTag(matched[0], attributes?.em ?? ''));
        }
    }

    // Em with *asterisk*
    while (EMAsteriskRegex.test(line)) {
        const matched = line.match(EMAsteriskRegex);

        if (matched?.length) {
            line = line.replace(matched[0], generateEmTag(matched[0], attributes?.em ?? ''));
        }
    }

    // Bold with __underscore__
    while (BOLDUnderscoreRegex.test(line)) {
        const matched = line.match(BOLDUnderscoreRegex);

        if (matched?.length) {
            line = line.replace(matched[0], generateStrongTag(matched[0], '__', attributes?.strong ?? ''));
        }
    }

    // Bold with **asterisk**
    while (BOLDAsteriskRegex.test(line)) {
        const matched = line.match(BOLDAsteriskRegex);

        if (matched?.length) {
            line = line.replace(matched[0], generateStrongTag(matched[0], '**', attributes?.strong ?? ''));
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

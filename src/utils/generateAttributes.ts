import { IMrkdwnyOptions } from '../';

export function generateAttributes(options: IMrkdwnyOptions = {}) {
    const attributes = {
        p: '',
        a: '',
        img: '',
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        h5: '',
        h6: '',
    };

    const optionKeys = Object.keys(options ?? {});

    if (optionKeys.length) {
        for (const key of optionKeys) {
            // TODO: fix this type
            // @ts-expect-error ???
            const keyAttributes = Object.keys(options[key] ?? {});

            if (keyAttributes.length) {
                for (const attribute of keyAttributes) {
                    // TODO: fix this type
                    // @ts-expect-error ???
                    attributes[key] += ` ${attribute}="${options[key][attribute]}"`;
                }
            }
        }
    }

    return attributes;
}

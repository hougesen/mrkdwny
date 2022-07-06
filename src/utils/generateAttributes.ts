import { IMrkdwnyElementOptions } from '../';

export type ElementAttributes = {
    // TODO: figure out why typescript expects the key to be used
    // eslint-disable-next-line no-unused-vars
    [key in keyof IMrkdwnyElementOptions]?: string;
};

export function generateAttributes(elementOptions: IMrkdwnyElementOptions = {}): ElementAttributes {
    const attributes: ElementAttributes = {};

    const optionKeys = Object.keys(elementOptions ?? {});

    if (optionKeys.length) {
        for (const key of optionKeys) {
            // TODO: fix this type
            const keyAttributes = Object.keys(elementOptions[key as keyof IMrkdwnyElementOptions] ?? {});

            attributes[key as keyof IMrkdwnyElementOptions] = '';

            if (keyAttributes.length) {
                for (const attribute of keyAttributes) {
                    if (typeof attribute === 'string') {
                        // TODO: fix this type
                        // @ts-expect-error ???
                        attributes[key] += ` ${attribute}="${elementOptions[key][attribute]}"`;
                    }
                }
            }
        }
    }

    return attributes;
}

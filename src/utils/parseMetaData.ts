import { METARegex } from './regex';
import { validateDate } from './validateDate';

export interface IMarkdownMetaData {
    [key: string]: string | Date | number;
}

export function parseMetaData(data: string): IMarkdownMetaData {
    const metadata: IMarkdownMetaData = {};

    for (const line of data.split('\n')) {
        if (METARegex.test(line)) {
            const [key, value, _] = line.split(': ');

            const trimmedValue = value.trim();

            // TODO: figure out how to handle epoch timestamps
            if (!isNaN(Number(trimmedValue))) {
                metadata[key.trim()] = Number(trimmedValue);
            } else if (validateDate(trimmedValue)) {
                metadata[key.trim()] = new Date(trimmedValue);
            } else {
                metadata[key.trim()] = value;
            }
        }
    }

    return metadata;
}

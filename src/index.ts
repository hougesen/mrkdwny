import { parseDocument } from './lib/parseDocument';
import { IMarkdownMetaData, parseMetaData } from './lib/parseMetaData';

export interface IMarkdown {
    metadata?: IMarkdownMetaData;
    html: string;
}

export function parseMarkdown(fileContent: string): IMarkdown {
    const result: IMarkdown = {
        metadata: undefined,
        html: '',
    };

    if (fileContent.includes('---')) {
        const [_, metaData, lines] = fileContent?.trim()?.split('---');

        result.html = parseDocument(lines);
        result.metadata = parseMetaData(metaData);
    } else {
        result.html = parseDocument(fileContent);
    }

    return result;
}

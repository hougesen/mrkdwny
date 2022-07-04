import { parseDocument } from './parseDocument';
import { TMarkdownElement } from './parseLine';
import { IMarkdownMetaData, parseMetaData } from './parseMetaData';

export interface IMarkdown {
    metadata?: IMarkdownMetaData;
    markdown: TMarkdownElement[];
}

export function parseMarkdown(fileContent: string): IMarkdown {
    const result: IMarkdown = {
        metadata: undefined,
        markdown: [],
    };

    if (fileContent.includes('---')) {
        const [_, metaData, lines] = fileContent?.trim()?.split('---');

        result.markdown = parseDocument(lines);
        result.metadata = parseMetaData(metaData);
    } else {
        result.markdown = parseDocument(fileContent);
    }

    return result;
}

import { parseDocument } from './lib/parseDocument';
import { TMarkdownElement } from './lib/parseLine';
import { IMarkdownMetaData, parseMetaData } from './lib/parseMetaData';

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

import { parseDocument } from './utils/parseDocument';
import { IMarkdownMetaData, parseMetaData } from './utils/parseMetaData';

export interface IMarkdown {
    metadata?: IMarkdownMetaData;
    html: string;
}

export interface IElementBaseOptions {
    /**
     * ID will be set based on the text value
     * @example
     * # heading-1
     * <h1 id="heading-1">heading 1</h>
     */
    set_id?: boolean;
    class?: string;
    style?: string;
}

export interface IATagOptions extends IElementBaseOptions {
    target?: string;
    rel?: string;
    referrerpolicy?: string;
}

export interface IImgOptions extends IElementBaseOptions {
    loading?: 'eager' | 'lazy';
}

export type TElementOptions = IImgOptions | IATagOptions | IElementBaseOptions;

export interface IMrkdwnyOptions {
    p?: IElementBaseOptions;
    a?: IATagOptions;
    img?: IImgOptions;
    h1?: IElementBaseOptions;
    h2?: IElementBaseOptions;
    h3?: IElementBaseOptions;
    h4?: IElementBaseOptions;
    h5?: IElementBaseOptions;
    h6?: IElementBaseOptions;
}

export function parseMarkdown(fileContent: string, options: IMrkdwnyOptions = {}): IMarkdown {
    const result: IMarkdown = {
        metadata: undefined,
        html: '',
    };

    if (fileContent.includes('---')) {
        const [_, metaData, lines] = fileContent?.trim()?.split('---');

        result.html = parseDocument(lines, options);
        result.metadata = parseMetaData(metaData);
    } else {
        result.html = parseDocument(fileContent, options);
    }

    return result;
}

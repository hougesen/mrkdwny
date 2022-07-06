export const METARegex = /(.*: )/;

export const LINKRegex = /(\[[^]*?\])\((.*?)\)/;

/** For lines that only contains a link */
export const LINKRegexSingle = /^((\[.*\]?)(\(.*\)?))(?!)/;

export const IMGRegex = /(!\[[^]*?\])\((.*?)\)/;

/** For lines that only contains an image */
export const IMGRegexSingle = /^((\!\[.*\]?)(\(.*\)?))(?!)/;

export const H1Regex = /^(# .*$)/;

export const H2Regex = /^(## .*$)/;

export const H3Regex = /^(### .*$)/;

export const H4Regex = /^(#### .*$)/;

export const H5Regex = /^(##### .*$)/;

export const H6Regex = /^(###### .*$)/;

export const COMMENTRegex = /<!--([^]*?)-->/gm;

export const BOLDUnderscoreRegex = /(?<!\_)(\_\_)(?!\_)(.*?)(?<!\_)(\_\_)(?!\_)/;

export const BOLDAsteriskRegex = /(?<!\*)(\*\*)(?!\*)(.*?)(?<!\*)(\*\*)(?!\*)/;

export const EMUnderscoreRegex = /(?<!_)(_)(?!_)([^]*?)(?<!_)(_)(?!_)/;

export const EMAsteriskRegex = /(?<!\*)(\*)(?!\*)([^]*?)(?<!\*)(\*)(?!\*)/;

/**
 * @summary used when the text is both bold and italic
 * @example
 * The following markdown
 * ***bold and italic***
 *
 * Should be used to return the following
 * <p><em><strong>bold and italic</strong></em></p>
 *
 */
export const BOLDEMAsterisRegex = /(?<!\*)(\*\*\*)(?!\*)(.*?)(?<!\*)(\*\*\*)(?!\*)/;

/**
 * @summary used when the text is both bold and italic
 * @example
 * The following markdown
 * ___bold and italic___
 *
 * Should be used to return the following
 * <p><em><strong>bold and italic</strong></em></p>
 *
 */
export const BOLDEMUnderscoreRegex = /(?<!\_)(\_\_\_)(?!\_)(.*?)(?<!\_)(\_\_\_)(?!\_)/;

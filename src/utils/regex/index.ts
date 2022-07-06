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

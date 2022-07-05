import { COMMENTRegex } from './regex';

/**
 * @summary removes markdown comments
 * @example
 * ```md
 * <!-- this should be remove -->
 *
 * This should be kept
 *
 * <!--
 * this multiline
 * should be removed
 * -->
 * ```
 */
export function removeCommments(fileContent: string): string {
    return fileContent?.replace(COMMENTRegex, '');
}

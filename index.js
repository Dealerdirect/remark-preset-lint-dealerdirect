/**
 * @author Franck Nijhof <f.nijhof@dealerdirect.nl>
 * @copyright 2016 Dealerdirect B.V.
 * @license MIT
 */
 
'use strict';

module.exports.plugins = {
  lint: {
    blockquoteIndentation: 2,
    checkboxCharacterStyle: {
        checked: 'x',
        unchecked: ' '
    },
    checkboxContentIndent: true,
    codeBlockStyle: 'fenced',
    definitionCase: true,
    definitionSpacing: true,
    emphasisMarker: '_',
    fencedCodeFlag: true,
    fencedCodeMarker: '`',
    fileExtension: 'md',
    finalDefinition: true,
    finalNewline: true,
    firstHeadingLevel: 1,
    hardBreakSpaces: true,
    headingIncrement: true,
    headingStyle: 'atx',
    linkTitleStyle: '"',
    listItemBulletIndent: true,
    listItemContentIndent: true,
    listItemIndent: 'space',
    listItemSpacing: true,
    maximumHeadingLength: 60,
    maximumLineLength: 120,
    noAutoLinkWithoutProtocol: true,
    noBlockquoteWithoutCaret: true,
    noConsecutiveBlankLines: true,
    noDuplicateDefinitions: true,
    noDuplicateHeadingsInSection: true,
    noDuplicateHeadings: true,
    noEmphasisAsHeading: true,
    noEmptyUrl: true,
    noFileNameArticles: true,
    noFileNameConsecutiveDashes: true,
    noFileNameIrregularCharacters: '\\.a-zA-Z0-9-',
    noFileNameMixedCase: true,
    noFileNameOuterDashes: true,
    noHeadingContentIndent: true,
    noHeadingIndent: true,
    noHeadingLikeParagraph: true,
    noHeadingPunctuation: '.,;:!?',
    noHtml: false,
    noInlinePadding: true,
    noLiteralUrls: true,
    noMissingBlankLines: true,
    noMultipleToplevelHeadings: true,
    noReferenceLikeUrl: true,
    noShellDollars: true,
    noShortcutReferenceImage: false,
    noShortcutReferenceLink: false,
    noTableIndentation: true,
    noTabs: true,
    noUndefinedReferences: true,
    noUnusedDefinitions: true,
    orderedListMarkerStyle: '.',
    orderedListMarkerValue: 'ordered',
    ruleStyle: '-------------------------------------------------------------------------------',
    strongMarker: '*',
    tableCellPadding: 'padded',
    tablePipeAlignment: true,
    tablePipes: true,
    unorderedListMarkerStyle: '-',
    external: [
        'remark-lint-books-links',
        'remark-lint-no-empty-sections',
        'remark-lint-no-url-trailing-slash'
    ]
  }
};

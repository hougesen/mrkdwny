interface MockResult {
    markdown: string;
    html: string;
}

const mockResults: MockResult[] = [
    // mix of everything
    {
        markdown: 'normal paragraph **bold with asterisk** __bold with underscore__ ![alt](src) [text](href)',
        html: '<p>normal paragraph <strong>bold with asterisk</strong> <strong>bold with underscore</strong> <img src="src" alt="alt" /> <a href="href">text</a></p>',
    },
    // Paragraph
    {
        markdown: 'paragraph',
        html: '<p>paragraph</p>',
    },
    // italiac
    {
        markdown: 'italic_with_underscore',
        html: '<p>italic<em>with</em>underscore</p>',
    },
    {
        markdown: '_double_ _italic_',

        html: '<p><em>double</em> <em>italic</em></p>',
    },
    {
        markdown: '_double__italic_',
        html: '<p><em>double__italic</em></p>',
    },
    {
        markdown: 'italic*with*asterisk',
        html: '<p>italic<em>with</em>asterisk</p>',
    },
    {
        markdown: 'mix_of_*em*types',
        html: '<p>mix<em>of</em><em>em</em>types</p>',
    },
    {
        markdown: '*em* and **bold** _mixed_ **together**',
        html: '<p><em>em</em> and <strong>bold</strong> <em>mixed</em> <strong>together</strong></p>',
    },
    // Bold
    {
        markdown: '__bold with underscore__',
        html: '<p><strong>bold with underscore</strong></p>',
    },
    {
        markdown: '**bold with asterisk**',
        html: '<p><strong>bold with asterisk</strong></p>',
    },
    {
        markdown: 'text on the left **with** spaces and asterisk',
        html: '<p>text on the left <strong>with</strong> spaces and asterisk</p>',
    },
    {
        markdown: 'text on the left __with__ spaces and underscore',
        html: '<p>text on the left <strong>with</strong> spaces and underscore</p>',
    },
    {
        markdown: 'left**middle**right',
        html: '<p>left<strong>middle</strong>right</p>',
    },
    {
        markdown: 'left__middle__right',
        html: '<p>left<strong>middle</strong>right</p>',
    },
    // Italic and bold
    {
        markdown: '___italic and bold___',
        html: '<p><em><strong>italic and bold</strong></em></p>',
    },
    {
        markdown: '***italic and bold***',
        html: '<p><em><strong>italic and bold</strong></em></p>',
    },
    {
        markdown: 'this is a line with ***italic and bold with asterisk*** and ***italic and bold with underscore***',
        html: '<p>this is a line with <em><strong>italic and bold with asterisk</strong></em> and <em><strong>italic and bold with underscore</strong></em></p>',
    },
    // Img tags
    {
        markdown: '![text](/image.png)',
        html: '<p><img src="/image.png" alt="text" /></p>',
    },
    {
        markdown: '![alt tag](https://mhouge.dk/logo.png)',
        html: '<p><img src="https://mhouge.dk/logo.png" alt="alt tag" /></p>',
    },
    {
        markdown: '![1alt tag1](https://mhouge.dk/logo.png)![2alt tag2](https://mhouge.com/logo.png)',
        html: '<p><img src="https://mhouge.dk/logo.png" alt="1alt tag1" /><img src="https://mhouge.com/logo.png" alt="2alt tag2" /></p>',
    },
    {
        markdown: '![1alt tag1](https://mhouge.dk/logo.png) ![2alt tag2](https://mhouge.com/logo.png)',
        html: '<p><img src="https://mhouge.dk/logo.png" alt="1alt tag1" /> <img src="https://mhouge.com/logo.png" alt="2alt tag2" /></p>',
    },
    // A tags
    {
        markdown: '[link text](https://mhouge.dk)',
        html: '<p><a href="https://mhouge.dk">link text</a></p>',
    },
    {
        markdown: '[this is the link text](https://google.com)',
        html: '<p><a href="https://google.com">this is the link text</a></p>',
    },
    {
        markdown: 'left [link 1](https://mhouge.dk) right',
        html: '<p>left <a href="https://mhouge.dk">link 1</a> right</p>',
    },
    {
        markdown: '[link 1](https://mhouge.dk)[link 2](https://google.com)',
        html: '<p><a href="https://mhouge.dk">link 1</a><a href="https://google.com">link 2</a></p>',
    },
    {
        markdown: 'left [link 1](https://mhouge.dk) middle [link 2](https://google.com) right',
        html: '<p>left <a href="https://mhouge.dk">link 1</a> middle <a href="https://google.com">link 2</a> right</p>',
    },
    // headings
    {
        markdown: '# heading 1',
        html: '<h1>heading 1</h1>',
    },
    {
        markdown: '## heading 2',
        html: '<h2>heading 2</h2>',
    },
    {
        markdown: '### heading 3',
        html: '<h3>heading 3</h3>',
    },
    {
        markdown: '#### heading 4',
        html: '<h4>heading 4</h4>',
    },
    {
        markdown: '##### heading 5',
        html: '<h5>heading 5</h5>',
    },
    {
        markdown: '###### heading 6',
        html: '<h6>heading 6</h6>',
    },
];

export default mockResults;

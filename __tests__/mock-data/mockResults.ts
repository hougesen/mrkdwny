interface MockResult {
    markdown: string;
    html: string;
}

export default [
    // Paragraph
    {
        markdown: 'paragraph',
        html: '<p>paragraph</p>',
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
] as MockResult[];

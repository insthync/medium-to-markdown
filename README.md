# Medium to markdown
[![npm](https://img.shields.io/npm/v/medium-to-markdown-enhanced.svg)](https://npmjs.com/package/medium-to-markdown-enhanced) [![npm](https://img.shields.io/npm/l/medium-to-markdown-enhanced.svg)]()

This module lets you take a medium post and convert it to markdown.

### Usage

Currently, the module supports getting the markdown from a medium post by URL.

```javascript
const mediumToMarkdown = require('medium-to-markdown-enhanced');

mediumToMarkdown.convertFromUrl('<medium post url>')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
```

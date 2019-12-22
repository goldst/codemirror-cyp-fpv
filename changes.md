## changes to the original proof page
- added `assets/codemirror/*`, that's from [codemirror.net](https://codemirror.net), license: MIT
- added `assets/cyp.js`
- added `assets/proof.js`
- changed `assets/style.css`, the lines before the comment are new
- changed `index.html` (which might also be called different on the server, i guess it's generated automatically anyway)
    - in `<head>`
        - added the `<link>` to codemirror's stylesheet
    - in `<form>`
        - changed `style="margin:..."` to add a margin to the right side too
        - added the ids `cprf` and `cthy` to the respective textareas
    - at the end of `<body>`
        - added 4 script tags. The order is important

- The rest is taken directly from vmnipkow3, all rights reserverd by TUM's chair for logic and verification
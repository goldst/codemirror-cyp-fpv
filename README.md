# codemirror-cyp-fpv
Implements [check your proof (cyp)](https://github.com/noschinl/cyp) syntax highlighting and indentation for [codemirror](https://codemirror.net), especially for [TUM](https://tum.de)'s [chair for logic and verification](https://www21.in.tum.de/)'s online cyp proof checker, available for participants of the *functional programming and verification* (*Funktionale Programmierung und Verifikation*, *fpv*) module

Try the [demo](https://goldst.github.io/codemirror-cyp-fpv/).

## Adding codemirror-cyp-fpv to your own project
Add a `<link>` to `assets/cyp.js` and initialize codemirror like you did before with a config object containing `mode: 'cyprf'`. You don't need any other files than `assets/cyp.js`.

## Adding codemirror-cyp-fpv to vmnipkov3
Refer to [changes.md](./changes.md) to see everything that i added and copy the respective chunks of code to the files they belong to

## License
part | comment
-|-
[codemirror](https://codemirror.net) | MIT
my own stuff, described in [changes.md](./changes.md) | MIT
proof checker website by [chair for logic and verification](https://www21.in.tum.de/) | all rights reserved, i guess don't use it in any own projects if nobody allowed you to use it
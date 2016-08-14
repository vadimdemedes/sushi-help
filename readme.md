# sushi-help

[![Build Status](https://travis-ci.org/vdemedes/sushi-help.svg?branch=master)](https://travis-ci.org/vdemedes/sushi-help)
[![Coverage Status](https://coveralls.io/repos/vdemedes/sushi-help/badge.svg?branch=master&service=github)](https://coveralls.io/github/vdemedes/sushi-help?branch=master)

Help message middleware for [Sushi](https://github.com/vdemedes/sushi).


## Installation

```
$ npm install sushi-help --save
```


## Usage

```js
const sushi = require('sushi');
const help = require('sushi-help');

const app = sushi();
app.use(help('my help message'));

app.run(process.argv);
```

Output:

```
$ node app.js -h
my help message
```


## Tests

```
$ npm test
```


## License

MIT © [Vadim Demedes](https://github.com/vdemedes)

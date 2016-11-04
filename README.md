# Typed bignumber.js
[![Build Status](https://travis-ci.org/types/npm-bignumber.js.svg?branch=master)](https://travis-ci.org/types/npm-bignumber.js)

Typescript Typings for [bignumber.js](https://github.com/MikeMcl/bignumber.js).

## [API Documentation](http://typed-bignumber-js.surge.sh/classes/bignumber)

## Installation
```sh
typings install --save bignumber.js
```

## Usage

```ts
import BigNumber from 'bignumber.js';

const x = new BigNumber(0.1);
const y = x.plus(0.2);               // '0.3'
new BigNumber(0.7).plus(x).plus(y);  // '1'
x.plus('0.1', 8);                    // '0.225'
```

## Contributing
The tests use examples from the [docs](http://mikemcl.github.io/bignumber.js/).
You can run them by running `npm run build` and `npm run test`.

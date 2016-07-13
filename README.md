# Typed bignumber.js
[![Build Status](https://travis-ci.org/felixfbecker/typed-bignumber.js.svg?branch=master)](https://travis-ci.org/felixfbecker/typed-bignumber.js)

Typescript Typings for [bignumber.js](https://github.com/MikeMcl/bignumber.js).

## Installation
```sh
typings install --save bignumber.js
```

## Usage

```ts
import BigNumber = require('bignumber.js');

const x = new BigNumber(0.1);
const y = x.plus(0.2);               // '0.3'
new BigNumber(0.7).plus(x).plus(y);  // '1'
x.plus('0.1', 8);                    // '0.225'
```

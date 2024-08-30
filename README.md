Telestaicore Library
=======

A pure and powerful JavaScript Telestai library.

## Principles

Telestai is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Telestai network allows for highly resilient Telestai infrastructure, and the developer community needs reliable, open-source tools to implement Telestai apps and services.

## Get Started

```
npm install telestaicore-lib
```

```
bower install telestaicore-lib
```

## Examples

* [Generate a random address](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#generate-a-random-address)
* [Generate a address from a SHA256 hash](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#create-a-transaction)
* [Sign a Telestai message](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#sign-a-telestai-message)
* [Verify a Telestai message](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#verify-a-telestai-message)
* [Create an OP RETURN transaction](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)


## Security

We're using telestaicore in production, but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/CONTRIBUTING.md) file.

## Building the Browser Bundle !!Unsupported as no block header decode functions purely in JS!!

To build a telestaicore-lib full bundle for the browser:

```sh
gulp browser
```

This will generate files named `telestaicore-lib.js` and `telestaicore-lib.min.js`.

## Development & Tests

```sh
git clone https://github.com/Telestai-Project/telestai-lib/telestaicore-lib
cd telestaicore-lib
npm install
```

Run the node tests(browser tests will fail because there are no pure js libs for x16r or x16rV2:

```sh
gulp test:node
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## License

Code released under [the MIT license](https://github.com/Telestai-Project/telestai-lib/telestaicore-lib/blob/master/LICENSE).

Copyright 2018-2019 UnderDarkSkies

Copyright 2013-2017 BitPay, Inc. 

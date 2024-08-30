'use strict';

var telestaicore = module.exports;

// module information
telestaicore.version = 'v' + require('./package.json').version;
telestaicore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of telestaicore-lib found. ' +
      'Please make sure to require telestaicore-lib and check that submodules do' +
      ' not also include their own telestaicore-lib dependency.';
    throw new Error(message);
  }
};
telestaicore.versionGuard(global._telestaicore);
global._telestaicore = telestaicore.version;

// crypto
telestaicore.crypto = {};
telestaicore.crypto.BN = require('./lib/crypto/bn');
telestaicore.crypto.ECDSA = require('./lib/crypto/ecdsa');
telestaicore.crypto.Hash = require('./lib/crypto/hash');
telestaicore.crypto.Random = require('./lib/crypto/random');
telestaicore.crypto.Point = require('./lib/crypto/point');
telestaicore.crypto.Signature = require('./lib/crypto/signature');

// encoding
telestaicore.encoding = {};
telestaicore.encoding.Base58 = require('./lib/encoding/base58');
telestaicore.encoding.Base58Check = require('./lib/encoding/base58check');
telestaicore.encoding.BufferReader = require('./lib/encoding/bufferreader');
telestaicore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
telestaicore.encoding.Varint = require('./lib/encoding/varint');

// utilities
telestaicore.util = {};
telestaicore.util.buffer = require('./lib/util/buffer');
telestaicore.util.js = require('./lib/util/js');
telestaicore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
telestaicore.errors = require('./lib/errors');

// main telestai library
telestaicore.Address = require('./lib/address');
telestaicore.Block = require('./lib/block');
telestaicore.MerkleBlock = require('./lib/block/merkleblock');
telestaicore.BlockHeader = require('./lib/block/blockheader');
telestaicore.HDPrivateKey = require('./lib/hdprivatekey.js');
telestaicore.HDPublicKey = require('./lib/hdpublickey.js');
telestaicore.Networks = require('./lib/networks');
telestaicore.Opcode = require('./lib/opcode');
telestaicore.PrivateKey = require('./lib/privatekey');
telestaicore.PublicKey = require('./lib/publickey');
telestaicore.Script = require('./lib/script');
telestaicore.Transaction = require('./lib/transaction');
telestaicore.URI = require('./lib/uri');
telestaicore.Unit = require('./lib/unit');

// dependencies, subject to change
telestaicore.deps = {};
telestaicore.deps.bnjs = require('bn.js');
telestaicore.deps.bs58 = require('bs58');
telestaicore.deps.Buffer = Buffer;
telestaicore.deps.elliptic = require('elliptic');
telestaicore.deps.nodeX16r = require('node-x16r');
telestaicore.deps.nodeX16rV2 = require('node-x16rv2');
telestaicore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
telestaicore.Transaction.sighash = require('./lib/transaction/sighash');

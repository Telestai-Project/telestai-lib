'use strict';

// execution
// enable rest in raven.conf 'rest=1' (be sure to disable after)
// node ./telestai-utils/blkconverter.js

// convert block json from ravend format to telestaicore format

// get ./telestai-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.hex | xxd -r -p > ./telestai-utils/inputs/blk220909.dat

// get ./telestai-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.json > ./telestai-utils/inputs/blk220909.json

// get ./telestai-utils/inputs/blk220909.js by manually edit the file

// Manually check if blk220909-telestaicore.json match with blk220909.json

var telestaicore = require('..');
var Block = telestaicore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('telestai-utils/inputs/blk220909.dat');

var telestaicoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(telestaicoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('telestai-utils/outputs/blk220909-telestaicore.dat', telestaicoreFormatBlockBuffer);
fs.writeFileSync('telestai-utils/outputs/blk220909-telestaicore.json', blkJSONStr);

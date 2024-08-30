'use strict';

var should = require('chai').should();
var telestaicore = require('../');

describe('#versionGuard', function() {
  it('global._telestaicore should be defined', function() {
    should.equal(global._telestaicore, telestaicore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      telestaicore.versionGuard('version');
    }).should.throw('More than one instance of telestaicore');
  });
});

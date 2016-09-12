'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('<%- generatorName %>:<%- namespace %>', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/<%- namespace %>'))
      .inDir(path.join(__dirname, '../temp'))
      .withPrompts({
        // name: 'sub',
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});

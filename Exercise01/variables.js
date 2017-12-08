/*jshint esversion: 6 */
/*jshint node: true */

const assert = require('../bin/SimpleAssert.js');

let a, b, c;

/* Task: Instantiate a, b and c with values so that all tests pass */

assert.type(a, 'string');

assert.type(b, 'number');

c += 10;

assert.type(c, 'number');
assert.true(c >= 10);

c += a + b;

assert.type(c, 'string');

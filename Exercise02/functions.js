/*jshint esversion: 6 */
/*jshint node: true */

const assert = require('../bin/SimpleAssert.js');

/* Task: write the function 'foo' so that all tests pass */

assert.type(foo(1, 2), 'number');

assert.true(foo(1, 2, 4) == 8);

assert.type(foo('Hello', 'World'), 'string');

assert.equal(foo('Hello', 'World', '!'), 'Hello World !');

assert.equal(foo(['Hello', 'World'], ' '), 'Hello World');

/*----------------------------------------------------------------------------*/

function bar (func) {

  assert.equal(func(6,8), 48);

  assert.equal(func('Hello', 'World'), 'Hello World');

}

/* Task: Fill out the parameters and function body of the anonymous function */

bar((/* params */) => {

  /* function body */

});

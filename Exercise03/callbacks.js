/*jshint esversion: 6 */
/*jshint node: true */

const assert = require('../bin/SimpleAssert.js');

function map_arr (arr, func) {

  if (!Array.isArray(arr) || typeof func !== 'function') {
    assert.fail();
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }

}

let num_arr = [1, 2, 4, 8, 16];

let sum = 1;

/* Task: Fill in the parameters and function body of the anonymous function */

map_arr(num_arr, ( /* params */ ) => {

  /* function body */

});

assert.equal(sum, 1024);

/*----------------------------------------------------------------------------*/

let str_arr = ['Hello', 'World'];

let concat = '';

/* Task: Fill in the parameters and function body of the anonymous function */

map_arr(str_arr, ( /* params */ ) => {

  /* function body */

});

assert.equal(concat, 'Hello World');

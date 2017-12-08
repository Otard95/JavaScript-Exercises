/*jshint esversion: 6 */
/*jshint node: true */

module.exports = {

  type: (val, type) => {
    if (typeof val == type) {
      console.log('Test Passed');
    } else {
      console.error('Test Failed');
    }
  },

  true: (expression) => {
    if (expression) {
      console.log('Test Passed');
    } else {
      console.error('Test Failed');
    }
  },

  false: (expression) => {
    if (!expression) {
      console.log('Test Passed');
    } else {
      console.error('Test Failed');
    }
  },

  equal: (val1, val2) => {
    if (val1 === val2) {
      console.log('Test Passed');
    } else {
      console.error('Test Failed');
    }
  },

  fail: () => {
    console.error('Test Failed');
  }

};

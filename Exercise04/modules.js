/*jshint esversion: 6 */
/*jshint node: true */

const AnimalStory = require('./class.js');
const obj       = require('./object.js');
const instance  = require('./instance.js')(10);

let duck_story = new AnimalStory(3, 'duck', 'pond');
let pig_story = new AnimalStory(1, 'pig', 'park');

// Class test
assert.equal(duck_story.count, 3);
assert.equal(duck_story.animal, 'duck');
assert.equal(duck_story.place, 'pond');
assert.equal(duck_story.toString(), 'There are 3 ducks in the pond');

assert.equal(pig_story.count, 1);
assert.equal(pig_story.animal, 'pig');
assert.equal(pig_story.place, 'park');
assert.equal(pig_story.toString(), 'There is one pig in the park');

// Object tests
assert.equal(obj.fname, 'John' );
assert.equal(obj.lname, 'Smith');
assert.equal(obj.age  ,  34    );

// Instance tests
for (let i = 1; i < 10; i++) {
  assert.equal(instance.numbers[i], '' + i);
}

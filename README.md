# JavaScript Exercises (Basics)

A few small exercises to test you new found skills in the JavaScript programming language.

### Running the tests
To run the tests open up your preferred console and navigate to each test.  
Now use NodeJS to run the script.  
Example:
```
$ cd %project-folder%/Exercises01
$ node varibables.js
```
or use the `npm` scripts:
```
$ cd %project-folder%
$ npm run [ex01, ex02, ex03]
```

### What to do

Open up you favourite IDE and open the project folder
Add you code where specified.  
Look at the local `readme` For more info

### Goal

The code you insert should make all the tests pass.  
You should not need to edit any of the existing code.

### Asserts

There is a simple assert module in the bin folder,
go have a look if u want.  
Its really nothing more fancy then a `if` test and a `console.log` or `console.error`.  
Its simply to make the exercises cleaner.
The function names should be pretty clear, but there's the overview:
```
assert.type(var, type)   -> checks the typeof var is === type
assert.true(expression)  -> checks that the expression is true
assert.false(expression) -> checks that the expression is false
assert.equal(var1, var2) -> checks that var1 === var2 (both type and value)
assert.fail()            -> just fails the test

```

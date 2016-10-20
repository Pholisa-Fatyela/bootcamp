---
layout: default
title: Additional
---

# Modules

> Only look at this section once you are done with all the exercises for all the basic concepts.

All the code you wrote so far were in one script, the functions being created and used from the same file. There is no way currently to reuse a function you wrote from another function. That can be fixed using `modules`. Modules are a way to write functions that are decoupled from each other.

Look at this code:

```javascript
    //try this in a file called `tuesday.js`
    var assert = require('assert');

    var isTuesday = function(day){
        return day.toLowerCase().startsWith('tuesday');
    };

    // this should return true
    assert.equal(isTuesday('Tuesday'), true);
    assert.equal(isTuesday('tuesday'), true);

    // this should return false
    assert.equal(isTuesday('Friday'), false);
    assert.equal(isTuesday('October'), false);
```

To reuse the `isTuesday` function we need to create a module for it. Let's first move the test code to a separate file called `tuesday_tests.js`

```javascript
    //put this in a file called tuesday_tests.js
    var assert = require('assert');

    // this should return true
    assert.equal(isTuesday('Tuesday'), true);
    assert.equal(isTuesday('tuesday'), true);

    // this should return false
    assert.equal(isTuesday('Friday'), false);
    assert.equal(isTuesday('October'), false);
```

The `tuesday.js` file should look like this now:

```javascript
    //try this in a file called `tuesday.js`
    var isTuesday = function(day){
        return day.toLowerCase()
            .startsWith('tuesday');
    };
```

What happen if you run the tuesday tests?

Run it like this: `node tuesday_tests.js`

You should get something like this:

```javascript
    /Users/andre/Dropbox/projects/codex/t.js:4
    console.log(isTuesday('Tuesday'));
                ^

    ReferenceError: isTuesday is not defined
```

You need a way of letting the `tuesday_tests.js` know about `tuesday.js` - that is what `modules` are for.

## Creating a module

To create a module, you can use the `module.exports` statement. This will allow you to import the module with a `require` statement, similar to what you did for `assert` statements.


```javascript
    // in your tuesdays.js file do this:
    module.exports = function(day){
        return day.toLowerCase()
            .startsWith('tuesday');
    };
```

Import the `tuesday` module you created, using the `require` statement to your `tuesday_tests.js` file:

```javascript
    //in your `tuesday_tests.js` file
    var assert = require('assert');
    //this looks for a tuesday.js file in your current folder
    var isTuesday = require('./tuesday');

    // this should return true
    assert.equal(isTuesday('Tuesday'), true);
    assert.equal(isTuesday('tuesday'), true);

    // this should return false
    assert.equal(isTuesday('Friday'), false);
    assert.equal(isTuesday('October'), false);
```

## Clean up

Now go back to all the functions that you wrote during the bootcamp and put each function in each own module. Create a separate testing file called `thefunctionname_test.js` for each function, put your `assert` statements in that file.

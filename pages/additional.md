# Additional concepts

Only look at the concepts in this section once you are done with all the exercises for all the basic concepts.

## Functions in separate files

All the code you wrote so far were in one script, the functions being created and used from the same file. There is no way currently to reuse a function you wrote from another function. That can be fixed using `modules`. Modules are a way to write functions that are decoupled from each other.

Look at this code:

```javascript
//try this in a file called `tuesday.js`

var isTuesday = function(day){
    return day.toLowerCase().startsWith('tuesday');
};

// this should return true
console.log(isTuesday('Tuesday'));
console.log(isTuesday('tuesday'));

// this should return false
console.log(isTuesday('Friday'));
console.log(isTuesday('October'));
```

## Creating a module

To reuse the `isTuesday` function we need to create a module for it. Let's first move the test code to a separate file called `tuesday_tests.js`

```javascript
    //put this in a file called tuesday_tests.js

    // this should return true
    console.log(isTuesday('Tuesday'));
    console.log(isTuesday('tuesday'));

    // this should return false
    console.log(isTuesday('Friday'));
    console.log(isTuesday('October'));
```

The `tuesday.js` file should look like this now:

```javascript
//try this in a file called `tuesday.js`

var isTuesday = function(day){
    return day.toLowerCase().startsWith('tuesday');
};
```

What happen if you run the tuesday tests?

```javascript
/Users/andre/Dropbox/projects/codex/t.js:4
console.log(isTuesday('Tuesday'));
            ^

ReferenceError: isTuesday is not defined

```

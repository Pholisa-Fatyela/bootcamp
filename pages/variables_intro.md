---
layout: default
title: Functions introduction - practicals
---

# Variables & Function basics

Learn more about variables by running all the code examples using NodeJS. Put the code each script in a text file and execute them likes this:

`node <YOU_SCRIPT_NAME>.js`

## Variables

Variables are how JavaScript remember information.

There are different ways to declare 'variables' in JavaScript.

`var`, `const` and `let` - const and let was introduced in the latest version of JavaScript (ES6). Not all browsers supports const & let so use them with caution in the browser. You can use them in the latest versions of NodeJS. We will focus on `var` and `const` for now.

`var` is a variable it's content & type can change over time.
`const` is a constant value and can't change once defined.

> Create a file called `var_const.js` in your function_intro folder. Put this code snippet in there and run it using `node var_const.js`. Make sure you understand what the code is doing if not add a question to the QQ.

```javascript

var one = '102'
//variables can change
one = '120'

const two = '200';
console.log(two);

//constants can't changes
two = '202';

//two is still '202'
console.log(two);

//doing this cause an error - as one already exists
const one = 71;
```

## Variable types

The basic variable types in JavaScript are Strings, Numbers, Dates and Booleans. One can use the `typeof` operator to check variable types.

```javascript
//create a script called variables.js
//declaring some variables

var aString = 'this is my string!';
var aNumber = 1002; // a number type
var aDecimal = 1001.75; // still a number type
var aBool = false;
var today = new Date();

console.log(typeof aString);
console.log(typeof aNumber);
console.log(typeof aDecimal);
console.log(typeof aBool);
console.log(today);

```

## Dynamically typed variables

Variables in JavaScript are dynamically typed, that means a variables type can change after being declared.

```javascript
//create a script called dynamically_typed.js
//declare a string
var theString = 'my string';
console.log("theString's type is : " + typeof theString);

//change it do a number
theString = 1008;
//the type of theString is now a number
console.log('The variables type changed!');
console.log("theString's type is : " + typeof theString);

```

This might leads unintended consequences as each variable have is own built in functions. Be careful when declaring variables! Using constants helps getting around this.

You can run into errors like this:

```javascript
//create a script called type_errors.js and put the code below in there

//declare a string
var theString = 'my string';
//print the length of a string
console.log(theString.length);
//change it do a number
theString = 1008;
//this will fail
console.log('theString.length is now undefined and your program might break!');

console.log(theString.length);
```

## Empty variables

Sometimes variables are empty there are two types of empty [`undefined` and `null`](http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript)

`undefined` means the variable have been defined, but don't have a value yet.

`null` can be assigned to a variable to indicate that it is not defined. Confusing indeed but now you know. This will become useful in the future.

```javascript
//create a file called empty_variables.js

var theDay;

//this will be undefined
console.log(theDay);

theDay = null;

//now it is null
console.log(theDay);
```

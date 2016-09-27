---
layout: default
title: Function intro
---

# Variables & Function basics

## Variables

Variables are how JavaScript remember information.

There are different ways to declare 'variables' in JavaScript.

`var`, `const` and `let` - const and let was introduced in the latest version of JavaScript (ES6). Not all browsers supports const & let so use them with caution in the browser. You can use them in the latest versions of NodeJS. We will focus on `var` and `const` for now.

`var` is a variable it's content & type can change over time.
`const` is a constant value and can't change once defined.

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
//declaring some variables

var aString = 'this is my string!';
var aNumber = 1002; // a number type
var aDecimal = 1001.75; // still a number type
var aBool = false;
var today = new Date();

//
console.log(typeof aString);
console.log(typeof aNumber);
console.log(typeof aDecimal);
console.log(typeof aBool);
console.log(today);

```

## Dynamically typed variables

Variables in JavaScript is dynamically typed, that means a variables type can change after being declared.

```Javascript
//declare a string
var theString = 'my string';
console.log(typeof theString);

//change it do a number
theString = 1008;
//the type of theString is now a number
console.log(typeof theString);
```

This sometimes leads unintended consequences as each variable have is own built in functions. Be careful when declaring variables! Using constants helps getting around this.

## Empty variables

Sometimes variables are empty there are two types of empty [`undefined` and `null`](http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript)

`undefined` means the variable have been defined, but don't have a value yet.

```javascript
var theDay;
//this will be undefined
console.log(theDay);
```

`null` can be assigned to a variable to indicate that it is not defined. Confusing indeed but know you know.

## Built in JavaScript functions

## Variables

## Constants

The new version of JavaScript support constants. Constants have a fixed value and can't be changed after initialization.

## Function basics

## Function types

## Declaring vs calling a function

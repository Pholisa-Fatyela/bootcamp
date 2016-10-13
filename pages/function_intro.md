---
layout: default
title: Functions introduction - practicals
---
# Function introduction

## What can functions do

Using functions you can break your code up into reusable parts. You can group logic together and give it a name. And you can send it parameters and it can return you a result.

Instead of repeating yourself like this:

```javascript

var str = 'this is a string';
console.log(str);
console.log(typeof str);

var number = 100;
console.log(number);
console.log(typeof number);

var isBig = false;
console.log(isBig);
console.log(typeof isBig);

```

You can do this:

```javascript

//print out variable details
var printDetails = function(value){
    console.log(value);
    console.log(typeof value);
}

var str = 'this is a string';
var number = 100;
var isBig = false;

printDetails(str);
printDetails(number);
printDetails(isBig);

```

## Function declaration styles

There are two ways to declare functions in Javascript the one being `Function Expression` and the other `Function Declaration`


Function Expression:

```javascript
var isWeekday = function (day) {   
    //return if this is weekend or not
}
```

Function declaration:

```javascript
function isWeekday (day) {
    //return if this is a week day or nor
}
```


> `How are they different?` They're actually really similar. How you call them is exactly the same.The difference lies in how the browser loads them into the execution context. Function declarations load before any code is executed. Function expressions load only when the interpreter reaches that line of code. [quote from stackoverflow](http://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip)

This will fail:

```javascript
//execute this using function_expression.js

//call the function
myFunc();

//declare the function
var myFunc = function(){
    console.log('Function Expression');
}
```

This will work:

```javascript
//execute this using function_declaration.js
//call the function
myFunc();

//declare the function
function myFunc(){
    console.log('Function Declaration');
}
```

Which one should you use? Modern JavaScript developers tend to favour Function Expressions as it makes if explicit that functions are variables.

## Function building blocks

Functions have:

* A name (optional)
* Function block within curly braces
* Parameters (optional)
* Logic that executes inside the function body
* return parameters (optional)

```javascript
//execute this using functions.js

//an empty function called 'theFunction'
var theFunction = function(){
    // it returns nothing
}

//an function called 'theParamFunction'
var theParamFunction = function(num1, num2){
    //the function logic
    var result = num1 + num2;

    //return parameters
    return result;
}

//prints 3 on the console
console.log(theParamFunction(1,2));

```

## Declaring vs calling a function

It's important to know the difference between defining and calling a function. Defining a function will create a variable that contains the function, but the function won't be executed yet. To call (execute) a function you need to add round brackets '()' to the end of the function variable name.

Declaring a function:

```javascript
//execute this using define_vs_calling.js

var theFunction = function(){
    console.log('this is the function executing');
}

//what does this print
console.log(theFunction);
console.log(typeof theFunction);

//to call the function
theFunction();
//only now 'this is the function' is printed out to the console
```

## Function scope

JavaScript have function level scope. Variables defined in a function is not visible outside of the function. You will learn to appreciate this.

## Functions are variables

Javascript have higher order functions. That means that functions can be passed in as parameters and returned as a value from a function.

Doh!

```javascript
//execute this using functions_as_variables.js

var funcOne = function(){
    console.log('funcOne!');
};

var execFunc = function(f){
    f();
}

//use function as a parameter
execFunc(funcOne);
```

Functions passed in as variables are used widely in JavaScript and referred to as callbacks. They play an important roll in asynchronous JavaScript programming. Ajax and DOM Event Listeners use callbacks extensively.

## Recap

[Slides](../slides/functions_intro.html) for this section.

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

}
```

Function declaration:

```javascript
function isWeekday (day) {

}
```


> `How are the different?` They're actually really similar. How you call them is exactly the same.The difference lies in how the browser loads them into the execution context. Function declarations load before any code is executed. Function expressions load only when the interpreter reaches that line of code. [quote from stackoverflow](http://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip)

This will fail:

```javascript
//call the function
myFunc();

//declare the function
var myFunc = function(){
    console.log('Function Expression');
}
```

This will work:

```javascript
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

//an anonymous function - not usable
function(){

}

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

## Function scope

JavaScript have function level scope. Variables defined in a function is not visible outside of the function. You will learn to appreciate this.

## Functions are variables

Javascript have higher order functions. That means that Functions can be passed in as parameters and return as a value from a Functions.

Doh!

```javascript
var funcOne = function(){
    console.log('funcOne!');
};

var execFunc = function(f){
    f();
}

execFunc();
```

Functions passed in as variables are used widely in JavaScript and refered to as callbacks. They play an important roll in asyncronous JavaScript code. Ajax and Event Listeners use callbacks extensively.

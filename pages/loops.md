---
layout: default
title: Loops
---
# Loops

A loop is a programming constructs that allows code to repeatedly execute while a certain condition is true.

Loops are one of the fundamental programming building blocks and a key programming concept that you need to understand well. They are used widely for many different programming tasks.

Things you can use loops for includes:

* Finding the biggest / smallest item in a list
* Calculating the average value for a list of values
* Finding all the items that match a certain condition
* Finding the first occurrence of a specified condition in a list

## Loop types

You will focus on `for` and `while` loops.

`While` loops are useful in scenarios where the number of loops cycles required isn't known. `For` loops are for scenarios where the required number of loop cycles are known.

## For loop syntax

A `for loop` look like this:

```javascript
for(/* initialize counter */,
    /* check logical condition */,
    /* increment the counter */){

    //code in for loop body

}

//for example
for(var i=0;i<10;i++){
    console.log(i);
}

```

## While loop syntax:

A `while loop` like this:

```javascript

while(/* this condition is true */){
    //code in while loop body
    //use `break` to exit a loop.
}

//for example
var rolledNumber = 0;
while(rolledNumber !== 6){
    rolledNumber = rollDice();
    console.log('You rolled, ', val);
}
console.log("You rolled 6 you can start.");

```

## Lists and loops

`For` loops works well for accessing values in a list. As it provides you with an incrementing index that can be used to lookup values in a list.

Here is an example of printing all the values in a list using a for loop's index:

```javascript
//try this in a file called fruits.js

var fruits = ['apple', 'pear', 'mango', 'orange', 'banana'];

// to print out all the fruits in a list
for (var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

```

## Loops to filter data

You can use a for loop with an `if` statement to filter data in a list.  

The steps to do this are:

* Create an empty list for results;
* loop through your data list;
* check if items match a your filter condition;
* add matching items to the `results` list;
* once the loop completes the `results` list will contain the data you are looking for.

A code example:

```javascript
//Given a list of fruits
var fruits = ['apple', 'pear', 'mango', 'orange', 'banana'];
```

`Find all fruits that ends with the letter 'e'.`

```javascript
//try this in a file called e-fruits.js

var fruits = ['apple', 'pear', 'mango', 'orange', 'banana'];

// create an empty list for fruits ending with 'e'
var efruits = [];
for (var i=0;i<fruits.length;i++){
    var fruit = fruits[i];
    //check if the current fruit end with 'e'    
    if (fruit.endsWith('e')){
        // add fruit ending with 'e' to the list
        efruits.push(fruit);
    }
}
// should print ['apple', 'orange']
console.log(efruits);
```

## Maths using loops

You can solve math equations using loops.

For example:

`Sum all numbers less or equal to 300 that is a multiple of 3`

To solve this:

* use a for loop to loop through all number between 1 and 300;
* use the modulo operator (`%`) to check if the number is a multiple of 3;
* if it is a multiple of 3 add it to a variable declared outside of the loop,
* once the loop is done your variable will contain the sum of all the multiples of 3 less or equal to 300.

The code looks like this:

```javascript
// try in a file called sum_multiples_of3.js
var multiplesOfThee = 0;
for (var i=1;i<=300;i++){
    if (i % 3 === 0){
        multiplesOfThee += i;
    }
}
// the multiplesOfThee of three contains
console.log(multiplesOfThee);
```

# More with Loops

Another example is:

`Find the average of all numbers less or equal to 300 that is a multiple of 3`

This time around you need to sum all the numbers as before, but also keep a counter of how many numbers are a multiple of 3. Then you need to divide the sum of numbers by the counter to get the average.  

```javascript
// try in a file called avg_multiples_of3.js
var multiplesOfThreeSums = 0;
var numberCounter = 0;
for (var i=1;i<=300;i++){
    if (i % 3 === 0){
        numberCounter++;
        multiplesOfThreeSums += i;
    }
}
var avg = multiplesOfThreeSums/numberCounter;

// the avg variable contains the average
console.log(avg);
```

# Find the biggest number in a list

You can find the biggest number in a list of numbers using a for loop

To find the biggest item in a list:

* Declare a variable to hold the biggest number initialize it to 0;
* now loop through the list;
* check if the current number in the list is bigger than your variables value - if so store your current value in the variable;
* keep on doing this for each iteration of the loop;
* once the loop completes the variables will contains the biggest value in the list.

In code it looks like this:

```javascript
//try in a file called highscore.js

var scores = [56,73,51,87,45,23,47];
var highScore = 0;

for(var i=0;i<scores.length){
    var score = scores[i];
    if (score > highScore){
        highScore = score;
    }
}

//this should print 87
console.log(highScore);

```

A similar approach can be used to find the smallest number in a list. But you need to be careful not to initialize your control variable to 0, but rather to the first value in the list. Why is that you think?

## Recap

[Slides](../slides/loops.html) for this section.

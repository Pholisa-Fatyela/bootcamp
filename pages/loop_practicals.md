---
layout: default
title: Loops
---
# Looping exercises

Do the exercises below. Create each function in it’s own file, use the function name for the filename.

Do this work in a folder called `loop_for_awhile`. Add it to github. Commit regularly.

Use assert.equal to test your functions.

## Shopping list

> Remember to use the `.split` function of on a string to convert it into a list of strings.

Write a function called `shoppingList` that takes in a comma separated shopping list string, looking like this for example : `'1x bread, 6x hotdog rolls, 2x tubs of margarine '`. And print a shopping list to the screen like this:

```
Shopping list:
* 1x bread
* 6x hotdog rolls
* 2x tubs of margarine
```

Test is with your own shopping list string.

## Registration numbers

### Display all

Given a list of registration numbers, write a function called, `displayEachRegNumber`, that displays each registration number in the list on a new line.

### First one only

Write a function called `firstPaarl` that takes a comma separate string with registration numbers and returns the first registration number in the string for Paarl. Remember Paarl registration numbers starts with `CJ`.

### All of them

Write a function called `allPaarl` that takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl.

### Count them all

Write a function called `countAllPaarl` that takes a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl. Remember Paarl registration numbers starts with `CJ`.

### All of them for any town

Write a function called `allFromTown` that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return all the registration numbers in the string that is for that town.

Use it like this:

```javascript

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

//fromStellies should contains
assert.deepEqual(fromStellies, [CL 124, CL 345, CL 341])

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');

assert.deepEqual(fromKuilsriver, []);

```

### Count how many from a town

Write a function called `countAllFromTown` that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return number registration numbers in the string that is for that town.

Use it like this:

```javascript

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

//fromStellies should contains
assert.deepEqual(fromStellies, 3)

```

## Cell phone bills

Let's create some functions to help our friends to manage their airtime.

### Total phone bill

Write a function called `totalPhoneBill` that take in a string recording each phone call and sms sent and calculate the total bill for the data provided.

In this string `'call, sms, call, sms, sms'` there are 2 calls and 3 sms's. The cost per call is R2.75 and the call per SMS is R0.65. For this data `totalPhoneBill` should return `R7.45`

### Enough airtime?

Write a function called `enoughAirtime` that calculates if a user will have enough airtime based on their projected usage. The function takes a string with the projected usage and the amount of airtime available. The function return the number of airtime left or 0 if there is not enough airtime available.

The projected airtime usage string looks like this `'call,call,call,data,sms,sms,call,data'`. The cost per call is `R1.88`, data bundles are bought at `R12` each and sms's costs `R0.75` each. For this data and R50 airtime the function should return `R16.98`.  

The function should work for any projected airtime string and amount.

## Word game

A friend of yours started playing `WordCrush` a really addictive word puzzle game on Facebook and he asked you to write him some functions to help him solve some word puzzles.

Given a sentence write some functions (function names in brackets) that can:

* Find the longest word (`longestWord`);
* find the shortest word (`shortestWord`);
* find the sum of all the word lengths, in a sentence. (`wordLengths`).

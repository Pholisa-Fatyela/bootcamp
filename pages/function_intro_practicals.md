---
layout: default
title: Functions introduction - practicals
---

# Functions introduction - practicals

Do the practical exercises below. Create each function in it's own file, use the function name for the filename.

Do all this work under your projects folder in a folder called `function_intro`. Commit this folder and it contents to github.

You can only use **functions built** into Javascript variable types. **No conditional statements** allowed. Use `console.log` to display output to the console. Test by visual inspection ie. is the right answer displayed on the screen.

## Strings:

Write a function called `greet` that takes your neighbour’s name as a parameter and prints a greeting to them.

## String & Lists

Write a function called `countRegNumber` that takes in a string parameter that looks like this `CA 182736,CY 523519,CJ 812328` and returns the number of registration numbers in the string. It should also work for this string `CA 42665, AA 12 RT GP`. Test it with some strings of your own. Use Strings builtin `split` function. And List objects `length` function.

## Dates

Write a function called `isTuesday` that returns a boolean to find out if today is Tuesday?

## Vehicle registration numbers

Using Javascript strings built in `startsWith` and `endsWith` to write functions that identify the origin of vehicle registration numbers.

| Function name | Description     |
| :-------------  | :------------- |
| isFromBellville | returns true if a registration number is for Bellville otherwise returns false if not. A registration number for Bellville starts with `CY`       |
| isFromPaarl | returns true if a registration number is for Paarl otherwise returns false. Paarl registration numbers starts with `CJ`      |
| isFromCapeTown | returns true if a registration number is for Cape Town otherwise returns false. Cape Town registration looks like this `CA 732-127`      |
| isFromGauteng | returns true if a registration number is for Gauteng otherwise returns false. Gauteng registration numbers looks like this `DR 12 TY GP`|
| isFromLimpopo | returns true if a registration number is for Limpopo otherwise returns false. Limpopo registration numbers looks like this `DRT 122 L`|

## More parameters less repetition

If you create a function that takes 2 parameters, one for the registration number and the other for the location indicator, you need fewer functions to identify a registration number's location.

```javascript

isFromPaarl('CJ 98912');
isFromBellville('CJ 98912');
isFromCapeTown('CA 98912');

//can be replaced with
isFrom('CJ 98912', 'CJ');
isFrom('CY 874324', 'CY');
isFrom('CY 874324', 'CA');

```

Why is the second example simpler?
Discuss with someone else in your group.

Create the `isFrom` function. It should work for Western Cape and Natal registration numbers.

Write a function called `regCheck` that can check if a registration number is for GP, L, EC, MP registration plates.

```javascript

var isGP = regCheck('DV 23 NB GP', 'GP');

//should print true
console.log(isGP);

var isMP = regCheck('DV 23 LP GP', 'MP');
//should print false
console.log(isMP);

// should return true
var isBellville = isFrom('CY189-012', 'CY');
//should return false
var isDurban = isFrom('CY189-012', 'ND');
```

## Dates:

Using the Javascript Date object to write the functions below.

This code contains some of the building logic you need for the functions.

```javascript
const date = new Date('2010-04-01');
var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday'];

//return index between 0 and 6
console.log(date.getDay());

//look up the week day text string from the Array
console.log(weekDays[date.getDay()]);
```

Write a function called `isWeekday` find out if the parameter passed in is a weekDay.

Write a function called `yearsAgo` that takes in a `year` and return how many years ago that was. Use the Date objects `getFullYear` function.

Write a function called `dayToday` to find the day today. This function takes no parameters;

Write a function called `getDay` which can find out which day of the week a specific date was.

Write a function called `sameWeekday` that takes in two dates and check if both dates have the same weekday. For example if both dates are a Monday the function should return true.

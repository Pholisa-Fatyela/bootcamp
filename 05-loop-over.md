---
layout: default
title: Loop over variables
---

# Loop over variables

Using Lists any Arrays makes it easier to use more variables together. And by using loops you can use less code to access variables in Lists & Arrays.

There are various different loop types.

Loops are doing the same thing over until a certain condition is met.

If we have an instruction that needs to run repeatedly we use loops, we need to tell the loop when to start and stop. Loops will stop or start based on the condition provided.

## Types of loops

What different kind of loops have you came across?

There are two basic loop types:

* `For` loops works well if you have a list and you would like to visit each entry in the list.

* `While` loops works well to keep on doing something until a certain condition is met.

### For loops

To loop over a list you need a variable that keeps track of which variable you are looking in the list, we call this an index. You need to know how to use the index to look at variables in the list.

Once you looked at the value in the list increment the index, then use a conditional statements to check if the variable is still with in bounds and not bigger than the list is long. A for loop does all these steps in a compact way.

```javascript
for (var index=0;index<list.length;index++){
    var data = list[index];
}
```

### While loops

Some times you need to keep on doing something until a certain condition is met, you might not even have a list of data of any sorts. Like when some people play snakes and ladders - you need to keep on rolling the dice until you get a six to start. While loops work well for these kind of scenarios.

```javascript
var rolledSix = false;
while(!rolledSix){
    rolledSix = rolledTheDice() === 6;
    if (rolledSix){
        console.log('You can start!');
        //the loop will exit as rolledSix became true
    }
    else{
        console.log('Nope roll again!');
        //the loop will keep going as the rolledSix is still false
    }
}
```

## Using loops

```javascript
var callDurations = [23, 47, 50, 17];
```

Now use a loop with the `callDurations` variable to calculate the following values:

* the total duration of all 4 last calls;
* the total cost for each call;
* the total cost for all calls.

What kind of loop did you use? How useful are loops?

## Looping over more data

Now that you can answer the questions using loops you can easily add new callDurations entries and your calculations should still work.

Try it out, use your functions with this list:

```javascript
var callDurationsTwo = [23, 47, 50, 17, 34, 71];
```

What happens?

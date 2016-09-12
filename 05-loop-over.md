---
layout: default
title: Loop over variables
---

# Loop over variables

Using Lists any Arrays makes it easier to use more variables together. And by using loops you can use less code to access variables in Lists & Arrays.

There are various different loop types.

Loops are doing the same thing over until a certain condition is met or not yet met.

What different kind of loops have you came across?

Two basic types are:

* `For` loops works well if you have a list and you would like to visit each entry in the list.

* `While` loops works well to keep on doing something until a certain condition is met.

## Using loops

`List loop basics:` To loop over a list you need a variable that keeps track of which variable you are looking in the list, we call this an index. You need to know how to use the index to look at variables in the list.

Once you looked at the value in the list increment the index, then use a conditional statements to check if the variable is still with in bounds and not bigger than the list is long. A for loop does all these steps in a compact way.

```javascript
for (var index=0;index<list.length;index++){
    var data = list[index];
}
```
## Using loops:

```javascript
var callDurations = [23, 47, 50, 17];
```

Now use a loop with the `callDurations` variable to calculate the following values:

* the total duration of all 4 last calls;
* the total cost for each call;
* the total cost for all calls.

What kind of loops did you use? How useful are loops?

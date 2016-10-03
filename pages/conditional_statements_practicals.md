---
layout: default
title: Conditional statements
---

# Conditional statements

Do the practical exercises below. Create each function in it's own file, use the function name for the filename.

Do this work in a folder called `conditionally_done`. Add it to github. Commit regularly.

Use `assert.equal` to test your functions.

## Weekend or not

Write a function called `weekOrWeekend` that takes in a `day` parameter. If the day passed in is a weekDay it should return `'week'` otherwise is should return `'weekend'`;

Start using the `assert` function to test your functions.
Import it into your script file by adding this as the first line in your file:

```javascript
const assert = require('assert');
```

Add tests for your script like this.

```javascript
// after you declared the function
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');
```

The `assert` functions will fail and print an error to the screen if the expected value is not returned from the function.

## From where exactly

Write a function called `fromWhere` that takes a car registration number as a parameter and returns the town the car is from. If the reg number starts with `CY` return `Bellville`, for `CJ` return `Paarl`, for `CA` return `Cape Town` otherwise return `Some other place!`

Test it using `assert`.

## Which shift?

Write a function called `transportFee` that returns the right price based on the shift you are working. If you are working 'morning' shift the transport cost is `R20`, 'afternoon' shift is `R10` as your work provides transport back home. If you work 'nightshift' you pay nothing,
because your work provides transport from and to work.

Test it using `assert`.

## Traffic Light

Our traffic system are ruled by the simple conditional logic of the traffic light. If the light is green you can go, if it's amber you should be careful and if it's red you should stop. Combining various sets of traffic light a powerful network controlling traffic flow can be created.

Fork the [traffic-light](https://github.com/codex-academy/traffic-light) repository into your github account. Now clone it onto use machine.

**Have fun!**

## Traffic Rules

Head on over to [traffic-rules](https://github.com/codex-academy/traffic-rules) to tackle the Traffic Rules challenge.

## My Decision

For the next challenge, you're going to [write your own function](/pages/mydecisions.html) from scratch. 
**Enjoy :)**

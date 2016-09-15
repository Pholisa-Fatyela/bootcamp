---
layout: default
title: Sharing code using functions
---

# Sharing code using functions

What will happen if you want to calculate the call statistics for your friends recent calls. There is a big problem with logic and data being coupled, there is no easy way to do this calculations.

That is where functions come into play - you can use them to assign a name to a piece of code. And pass some data into the function, which can then repeatedly execute the required logic and return the result of the executed logics.

Create some functions called:

* `totalDurationOfCalls` that takes in a list of call durations and return the total call duration for all the durations in the list;
* `totalCostForEachCall` that takes in a list of call durations an returns a list of total costs for each duration;
* `totalForBill` that takes in a list of call durations and return the total cost for all the calls.

The cost per second being `5` cents.

The new functions should work for alternatives of sets of data such as `[17, 67, 53, 48, 23]`.

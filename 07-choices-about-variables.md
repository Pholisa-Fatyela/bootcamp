---
layout: default
title: Choices about variables
---

# Choices about variables

Now the you know how to access and to create new variables let's look into how to make decisions about variables. Using a combination of variables and conditional statements in our code we can create some logic that react to data.

> Conditional logic patterns to consider:

* Given a condition make a decision and return the result of a decision
* Given a condition make a decision and increment/decrement the value of a variable. Or keep tracking.

## Applied choices

Let's look at this a promotion that our phone provider is running:

`Phone calls costs 7 cents per second unless a phone call is longer than 30 seconds then it costs 4 cents per second.`

How would this affect the code you created?

Let's consider other things:

* Do a call qualify for discount?
* How many calls qualify for discount?
* What is the discounted price for a call?
* What is the original price for a call?

Given a list of call durations:

* total price for all the calls including the discount?
* what is the total value of the discount?

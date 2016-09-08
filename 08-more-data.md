---
layout: default
title: More data
---

# More data

All the work you done so far was around a list of call durations. But in reality when you are making a phone call more data is involved.
Data such as:

* the number dialed
* the duration of the call
* the direction of the call - whether it's an inbound or an outbound call
* who the service provider is MTN, Vodacom or CellC for example

We need to find a way of enriching call data so that you can store all the above information for each call. That is exactly what Objects are for.

An object modeling the call data looks like this:

`
var callOneData = {
    number : '0825004000',
    duration : 37,
    direction = 'inbound',
    serviceProvider = 'MTN'
};
`

To access the duration data you need to access it via the `callOneData` object like this:

`callOneData.duration`

Accessing the properties of an object's that is in a list looks like this:

`console.log(callList[0].duration);
console.log(callList[0].direction));
console.log(callList[0].serviceProvider));
`

## Use objects

Now practice using some objects using this dataset:

`var userCalls = [
    { duration : 41, 'number' : '0836138901', direction = 'inbound', serviceProvider : 'MTN'},
    { duration : 17, 'number' : '0826901234', direction = 'outbound', serviceProvider : 'MTN'},
    { duration : 41, 'number' : '0761505671', direction = 'inbound', serviceProvider : 'MTN'},
    { duration : 41, 'number' : '0641268012', direction = 'outbound', serviceProvider : 'MTN'},
];`

Write some functions called:

* `totalDurationOfCallsWithObjects` that takes in a list of call durations and return the total call duration for all the durations in the list;
* `totalCostForEachCallWith` that takes in a list of call durations an returns a list of total costs for each duration;
* `totalForBillWithObjects` that takes in a list of call duration objects and return the total cost for all the calls.

The cost per second being `5` cents.

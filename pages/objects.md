---
layout: default
title: Objects
---

# Objects

Sometimes data is more complicated than one variable. A car have a color, make, model and a registration number. To describe a car using only a string or number variable is not really possible neither sufficient. You need a way to describe that the car was a blue Toyota Corolla with a registration number of CY 75327. That is what objects are for, it allows you to construct your own 'complicated variables'.

To create a variable for the car above you can create an Object Literal like this:

```javascript

var car = {
    color : 'blue',
    make : 'Toyota',
    model : 'Corolla',
    year : 2014,
    reg_number : 'CY 25913'
};

```

To access the attributes of the car you can use the `dot` or `index` notation.

```javascript

//dot notation
console.log(car.make);

//index notation
console.log(car['make']);

```

# Object Literals

Object Literals in JavaScript allows you to create a construct with a collection of Key Value Pairs. An object can have many `keys` that point to specific values. The values can be any JavaScript datatype, even a function or another Object.

Here an example Object:

```javascript
//try this in a file called person.js

var person = {
    firstName : "Jo",
    lastName : 'Dlamini',
    age : 27,
    employed : true,
    qualifications : ['matric', 'nat cert in plumbing'],
};

```


# Objects in lists

Objects can be used anywhere in JavaScript where you can use variables.

You can create list of Objects like this:

```javascript

var shoppingList = [
    { itemName : 'Milk 500ml', qty : 2},
    { itemName : 'Bread', qty : 1},
    { itemName : 'Rolls', qty : 6},
    { itemName : 'Fanta 1L', qty : 2},
];

//add a new object to a list like this
shoppingList.push({
    itemName : 'Coke 1L',
    qty : 3});

// or like this

var barOne = {
    itemName : 'Bar One',
    qty : 3};

shoppingList.push(barOne);

```

And then loop through them like this:

```javascript

console.log('Shopping list: ');
for(var i=0;i<shoppingList.length;i++){
    var listItem = shoppingList[i];
    console.log(listItem.itemName + " " + listItem.qty);
}

```

## Adding data to an Object

You can add new data to an existing object. Let's create a pricing Map using an Object which you can use to enrich the shopping list with a `totalPrice` for each item in the shopping list.

```javascript
var priceMap = {
    'Milk 500ml' : 7.50,
    'Bread' : 12.75,
    'Rolls' : 1.65,
    'Fanta 1L'
};
```

You can calculate the `totalPrice` for each line and add it to the the shopping list like this:

```javascript
//in a file called pricemap.js

var shoppingList = [
    { 'itemName' : 'Milk 500ml', qty : 2},
    { 'itemName' : 'Bread', qty : 1},
    { 'itemName' : 'Rolls', qty : 6},
    { 'itemName' : 'Fanta 1L', qty : 2},
];

//the price for each item
var priceMap = {
    'Milk 500ml' : 7.50,
    'Bread' : 12.75,
    'Rolls' : 1.50,
    'Fanta 1L' : 13.35
};

for(var i=0;i<shoppingList.length; i++){
    var listItem = shoppingList[i];
    var itemName = listItem.itemName;
    //get the item unit price
    var itemPrice = priceMap[itemName];
    //add a new attribute to the object
    listItem.totalPrice = listItem.qty * itemPrice;
}

//after this each item in the list should have a `totalPrice` attribute.

console.log(shoppingList);
```

## Grouping data using an object

You can use objects to group data, by using them as a Map. That allows you to directly map one value to another. The `priceMap` you used above is an example of using an Object as a Map.

```javascript
var priceMap = {
    'Milk 500ml' : 7.50,
    'Bread' : 12.75,
    'Rolls' : 1.50,
    'Fanta 1L' : 13.35
};

//prints out `1.50`
console.log('Rolls');

```

Using the `priceMap` makes it easy to get the price of an item using it's name;

## Calculations using an Object as a Map

Someone you know is selling loose fruits in their lunch break and gave you a list of fruit they sold yesterday. She want you to write a function to help her found how many of each fruit she sells everyday. She have a different list of fruits each day.

Here is yesterday's list:

`'Banana,Banana,Pear,Orange,Apple,Melon,Grape,Apple,Banana,Grape,Melon,Grape,Melon,Apple,Grape,Banana,Orange,Melon,Orange,Banana,Banana,Orange,Pear,Grape,Orange,Orange,Apple,Apple,Banana'`

How would you approach this?

What about like this:

* create a list of fruit names
* loop through the list
* count how many times each fruit occur in the list.

Job done!

But one problem you will have is knowing for which fruits to create variables for, as each day there can be different fruits in the list. To solve this you can use an Object as an mapping object. It allows you to add new entries into the Object dynamically. It's an easy way to keep track of and extending list of variables.

A fruit Object Map will look like this.

```javascript
var fruitMap = {
    'Apples' : 13,
    'Melon'  : 7,
    'Banana' : 12
}
```

* create a list of fruit names
* create and empty `fruitMap` object, `var fruitMap = {}`
* loop through the list of fruits
* check if the current fruit is in the `fruitMap`, if not add it and assign it a value of 0
* find and increment the value for the current fruit in the `fruitMap`

Once done you will have an Map which have a key for each fruit which map to how many of each fruit was sold.

In code this look like this:

```javascript

var fruitString = 'Banana,Banana,Pear,Orange,Apple,Melon,Grape,Apple,Banana,Grape,Melon,Grape,Melon,Apple,Grape,Banana,Orange,Melon,Orange,Banana,Banana,Orange,Pear,Grape,Orange,Orange,Apple,Apple,Banana';

var fruitList = fruitString.split(',');
var fruitMap = {};

for (var i = 0; i < fruitList.length; i++) {
    var currentFruit = fruitList[i];
    //check if the current fruit is already in the Map
    if (fruitMap[currentFruit] === undefined){
        fruitMap[currentFruit] = 0;
    }
    //increment the current entry in the map with 1
    fruitMap[currentFruit] = fruitMap[currentFruit] + 1
    //you can also use
    //fruitMap[currentFruit]++;
}
console.log(fruitMap);
```

## Looping over an Object

To calculate which fruit is the most popular you need to be able to loop over the `fruitMap` Object and compare the quantities for each fruit. To loop over an object you use a `for in` statement.

Using it looks like this:

```javascript
//loop through all the keys in the object
for(var fruit in fruitMap){
    console.log(fruit);
}

//use the keys to lookup the value in the Object

for(var fruit in fruitMap){
    //print out the quantity for each fruit
    console.log(fruitMap[fruit]);
}

```

The algorithms for finding the biggest and smallest items in a Map is the same as you used for lists. You just need `for in` rather than a normal `for` loop.

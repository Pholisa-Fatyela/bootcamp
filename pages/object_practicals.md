---
layout: default
title: Objects exercises
---

# Object exercises

Do the exercises below. Create each function in it’s
own file, use the function name for the filename.

Do this work in a folder called `practical_objects`.

Add it to github. Commit regularly.

Use assert.equal to test.

## Print a shopping list

Create a function called `printShoppingList` that take a list of products and print the items to the screen.

```javascript
//
var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Bread', price : 19.50 }
];
```

This should print:

```
Shopping list:
* Bread @ R11.00
* Milk @ R7.00
* Cheese @ R19.50
```

## Total cost

Create a function called `shoppingList` that calculates the total price for items on a shopping list.

Use these two shopping lists to test.

```javascript
//
var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var shoppingList1 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];
```

Also test the function using your own data.

## Expensive items

Write a function called `findItemsOver20` that takes a list of objects, each object having 2 attributes one called `name` and the other `price`. The function should return all the products that have a price more than R20.

Write a function called `findItemsOver` that takes a list of objects each with a `name` and `price` attribute. And also a second parameter which is a `threshold` for the item price. The function should return products more Expensive than the threshold.

For example:

```javascript

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = findItemsOver(itemList, 25)
//results look like this now.
var itemList = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

```

## Shop departments

A local shop want some help to determine which of their departments are the most profitable and which day of the week is the most profitable. Write two functions called `mostProfitableDepartment`, `mostProfitableDay` to help them to answer these questions.

Here is the [sales data](/pages/sales_data.js).

## Wordcrush continued

Your friend is still playing WordCrush and needs help with this challenge. Call the function `mostWordsEndWith`. The function should work for any sentence.

`Find the letter that the most words in a sentence ends with and all the words that ends with that letter`

Example sentence:

```javascript
var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'
```

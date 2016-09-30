---
layout: default
title: Conditional statements
---

# Conditional statements

## Choices about data

Conditional statements allows JavaScript to make choices about data, they are using variables and logical operators that evaluates to a boolean value. The conditional statement will then execute the appropriate code block.

```javascript
var day = 'Monday';

//evaluates to true
var isTuesday = (day === 'Tuesday');

if (isTuesday){
    // execute this code if Tuesday
}
else{
    //execute this code if it's not Tuesday
}
```

## Logical operators

The most widely used logical operators includes:

`===` : the equal sign, it returns `true` if two values matches and `false` if not.

`>` is the greater than, `less than` and `>=` greater or equal, `<=` less or equal. The `&&` - `the AND` and `||` - `the OR` operators are also very useful.

Logical operators can be combined.

```javascript
if (a > 7 && b<9 || c > 90){
    //if a is greater than 9 and b less than 9
    //    OR    
    // c is greater than 90
    //DO THIS!!
}

```

## if else

The `if/else` statement is the most basic of JavaScript's conditional statement support. It allows you to easily make choices about data.

```javascript
//try this in lunchWhere.js
var lunchWhere = function(bankBalance){
    if (bankBalance > 4500 ){
        return "Go and get KFC!"
    }
    else if (bankBalance < 4500 && bankBalance > 1500){
        return "Go to PnP!"
    }
    else{
        return "Two minute noodles today!";
    }
};
```

## Three equals

You might have been wondering why one have to use three equal signs when evaluating if some values are matching.

This is all down to a concept called [`type coercion`](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md), that converts values implicitly.

```javascript

//this will evaluate to true
var match = ('190' == 190);

//this will evaluate to false
var match = '190' === 190;
```

Behind the scenes JavaScript is converting the string into a number for you. And then do the comparison which evaluate to true. Using the three equal signs don't do type coercion so a string is compared to a number which is not the same. So the statement evaluates to false. Always you `===` as type coercion cause some unexpected bugs, when values are converted for you when they should not have been.

## Messy conditionals

Nested ifs can quickly become messy, and too many if else statements can be confusing. The `switch` statement is a cleaner way of handling many different conditions.

The switch statement syntax is:

```javascript

switch(route) {
    case "Langa":
        //logic here
        break;
    case "Stellenbosch":
        //logic here
        break;

    default:
        //if there is no match.
    	return "Defaults here!";
}
```

For example:

`If you are in town and you want to know which platform is your train`

```javascript
//try this using a file called platforms.js
switch(route) {
    case "Langa":
    	return “platform 1”;
    case "Stellenbosch":
    	return “platform 6”;
    case "Wynberg":
    	return "Platform 2";
    default:
    	return "There is no train to " + route;
}
```

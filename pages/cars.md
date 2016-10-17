---
layout: default
title: Cars from where
---

# Cars from where?

One of your friends wants to start a second hand car dealership and is doing some market research. He gave you a [list of car objects](/pages/cars.json) each object in the list looks like this:

```javascript

var car = {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
}

```

You can import the `cars.json` file into your program like this.

```javascript
//make sure the path is fine
var cars = require('./cars.json')
//cars will contain a list of cars
```

**Cars can be from :**

* Paarl ('CJ')
* Bellville ('CY')
* Stellenbosch ('CL')
* Malmesbury ('CK')
* Cape Town ('CA')
* Kuilsriver ('CF')

**Your friend now wants to know:**

* What make is the most popular? (`mostPopularCar`)
* How many Nissan's are from Malmesbury? (`nissansFromCK`)
* Which town has the most blue cars? (`mostBlueCars`)
* What town has the fewest orange cars? (`fewestOrangeCars`)
* What is the most popular model car overall? (`mostPopularModel`)
* What is the most popular model car in Stellenbosch? (`mostPopularCL`)
* What is the least popular model car in Kuilsriver? (`leastPopularCF`)

Write functions that can answer these questions for your friend. Each function's name is in brackets above.

**There's more**

Over and above that your friend want data for:

* all the cars for any given town `carsForTown('townname')`
* all the cars for a specific color for a specific town `numberOfCars('blue', 'town name')`
* the  cars for a specific color & model for a specific town `numberOfCarsPerModel('blue', 'model', 'town name')`
* the most popular color car for any given town `mostPopularColor('townname')`

Write functions that can answer these questions for your friend, function names as per examples.

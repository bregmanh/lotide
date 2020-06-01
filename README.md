# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hbregman/lotide`

**Require it:**

`const _ = require('@hbregman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: returns an object that shows number of instances each letter appears in the string
* `countOnly(mainString, {string1: true, string2: false, etc..})`: returns an object with number of of instances strings that have the values 'true' appear in a mainString
* `findKey(obj, callback)`: returns a key that has a certain value through a callback which specifies the condition of the value
* `findKeyByValue(obj, value)`:  returns a key that has a certain value 
* `flatten([nested, [array]])`: return array without the nested arrays
* `head([array, array etc...])`: returns the first element in the array
* `letterPositions(string)`: returns an object with keys pertaining to all the letters in the string with values pertaining to the positions (or indecies) of those letters in the string
* `map(input, callback)`: modifies input according to the condition in the callback
* `middle(array)`: returns the middle value(s) of an array
* `tail(array)`: returns the array after removing the first item
* `takeUntil(array, callback)`: returns the items in the array until a condition in the callback is satisfied
* `without([array], [number/array])`: returns the array adter removing the number/array specified



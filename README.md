# Reinforcements

`Reinforcements` is a node js package written in `Typescript` to give a massive support for variant data like `Strings`, `Arrays`, `Objects` ... and so on.


# Installation

`npm i reinforcements`

# Importing package

You can import package using `commonJs` format  or using `require` syntax.

```js
import $_ from 'reinforcements';
```

OR 

```js
const { $_ } = require('reinforcements');
```

## Usage
Almost everything is encapsulated inside `$_` variable, so whatever you pass to the function, it will detect the proper type of the given value and returns a corresponding object.

```js
import $_ from 'reinforcements';

let myArray = $_([1, 2, 3]);

console.log(myArray.min()); // 1
```

# Available Helpers

- [Arrays](#arrays)


# Arrays
All of `Array` methods are integrated inside the package so you'll expect to receive the same result and output for each method plus the new added methods to the `Arr` class.

## Properties
- [length](#array-length)


## Array length
To get the length of the array at any time, use the `length` property.

### Example

```js
let arrayItems = $_(['Hello', 'World']);

console.log(arrayItems.length); // 2
```

## Iterations

You can also iterate over the object using the `for..of` syntax.

```js
let arrayItems = $_(['Hello', 'World']);

for (let value of arrayItems) {
    // do something
}
```

## List of methods

- [min](#array-min)
 

 ## Array min
 Returns the minimum value of the array items.

### Example

```js

import $_ from 'reinforcements';

let myArray = $_([1, 2, 3]);

console.log(myArray.min()); // 1 
```

 ## Array min
 Returns the minimum value of the array items.

### Example

```js

import $_ from 'reinforcements';

let myArray = $_([1, 2, 3]);

console.log(myArray.min()); // 1 
```

# Tests
Run `npm run test` to perform test suits on all of the available methods and functions.

# Pull Requests
Another purpose of creating this package is for people who wants to develop their experience, you're welcome to make a `PR` to implement any **unimplemented** method, but don't forget to write a `test file` inside the `tests` directory for each single method separately.
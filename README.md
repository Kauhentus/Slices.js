# Slices.JS

This NPM package aims to provide Golang-like array slices to Javascript. Array slices can be very useful when dealing with data partitioned within a flat array.

# Introduction
Example, self explanatory code.
```js
const ArraySlice = require('slices.js');

const a = [1, 2, 3, 4, 5, 6, 7];
const b = new ArraySlice(a, 1, -3); // negative indices supported
// last index is -1, first index is -Array.length

// results [2, 3, 4, 5]
b[2] = 3;
// b = [2, 3, 3, 5]
b.reverse();
// b = [5, 3, 3, 2]
a
// [ 1, 5, 3, 3, 2, 6, 7 ]
```


# Functions
# Basic properties and methods
Properties and methods unique to the ArraySlice class.
## Property: `array`, `ArraySlice`

Returns the parent array
```js
const a = [1, 2, 3, 4, 5, 6, 7];
const b = new ArraySlice(a, 1, -3); // negative indices supported

a == b.array // true
```
## Method: `subarray` , `() -> Array`

Returns the array slice as an array
```js
b.subarray() // [2, 3, 4, 5] - an Array, NOT an ArraySlice
Array.isArray(b.subarray()) // true
```

## Property: `start`, `Int`
Returns the starting index of the slice. Negative indices are converted to their equivalent positive one.
```js
b.start // 1
```
## Property: `end`, `Int`
Returns the ending index of the slice Negative indices are converted to their equivalent positive one.
```js
b.end // 5
```
## Method: `mutmap`, `(appliedFunction : Function) -> ArraySlice`
Apply and set the value of each value in the slice with a function
```js
a // [1, 2, 3, 4, 5, 6, 7]
b // [2, 3, 4, 5]
b.mutmap(x => x + 1); // [3, 4, 5, 6]
a // [1, 3, 4, 5, 6, 6, 7]
```
## Method: `set`, `(newValues : Array) -> ArraySlice`
Set the values of the ArraySlice to corresponding values in an Array
```js
a // [1, 2, 3, 4, 5, 6, 7]
b // [2, 3, 4, 5]
b.set([1, 5, 3, 6]); // [1, 5, 3, 6]
a // [1, 1, 5, 3, 6, 6, 7]
```

# Derived properties and methods
Properties of normal Javascript arrays that are applicable to Array Slices. All methods that act on the slice are destructive. The changes are also reflected in the parent array.
## Property: `length`,  `Int`
Gets the length of the ArraySlice
```js
b // [2, 3, 4, 5]
b.length // 4
```
## Method: `copyWithin`, `(target : Int, start : Int, end : Int) -> ArraySlice`
`copyWithin` is a clone of the corresponding Javascript function. One can think of this as C's `memmove` function with an array. It copies one portion of the array, specified by `start` and `end`, to another part who's starting index is specified by `target`.
```js
a // [1, 2, 3, 4, 5, 6, 7]
b // [2, 3, 4, 5]
b.copyWithin(2, 0, 2) // [2, 3, 2, 3]
a // [1, 2, 3, 2, 3, 6, 7]
```
## Method: `fill`, `(value : Object) -> ArraySlice`
Fills the entire slice with one value.
```js
a // [1, 2, 3, 4, 5, 6, 7]
b // [2, 3, 4, 5]
b.fill(2) // [2, 2, 2, 2]
a // [1, 2, 2, 2, 2, 6, 7]
```
## Method: `reverse`, `() -> ArraySlice`
Reverse the entire slice.
```js
a // [1, 2, 3, 4, 5, 6, 7]
b // [2, 3, 4, 5]
b.reverse() // [5, 4, 3, 2]
a // [1, 5, 4, 3, 2, 6, 7]
```
## Method: `sort`, `(comparatorFunction : (a : Object, b : Object) -> Bool) -> ArraySlice`
Sorts the slice according to the given comparator function
```js
a // [1, 5, 2, 4, 3, 6, 7]
b // [5, 2, 4, 3]
b.sort((a, b) => a < b) // [2, 3, 4, 5]
a // [1, 2, 3, 4, 5, 6, 7]
```
## Property: `constructor`, `ArraySlice`
Returns the `ArraySlice` constructor
```js
new b.constructor([1, 2, 3]) // [1, 2, 3] is an ArraySlice
```
## Method: `valueOf`, `() -> Array`
```js
b // [5, 2, 4, 3]
b.valueOf() // [5, 2, 4, 3] is an Array
Array.isArray(b.valueOf()) // true
```

# Other properties and methods
Nondestructive Array methods like the following:

`concat`, `filter`, `includes`, `indexOf`, `join`, `lastIndexOf`, `slice`, `toString`, `toLocaleString`, `entries`, `every`, `find`, `findIndex`, `forEach`, `keys`, `map`, `reduce`, `reduceRight`, `some`, `values`

are not supported; they do not well with the Array Slice model. One can easily use these functions with the `subarray` method instead. However, a native array will be returned instead of an array slice.

```js
const a = [1, 2, 3, 4, 5, 6, 7];
const b = new ArraySlice(a, 1, -3); 

b.subarray().map(x => x + 1)
// [ 3, 4, 5, 6 ]
```
const ArraySlice = require('./index.js');

const a = [1, 2, 3, 4, 5, 6, 7];
const b = new ArraySlice(a, 1, -3); 

b[2] = 3;
console.log(b.reverse());
console.log(b[3])
console.log(a)

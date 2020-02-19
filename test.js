const ArraySlice = require('./index.js');

const a = [4, 7, 3, 6, 1, 2, 8, 5];
const b = new ArraySlice(a, 0, -2); 

console.log(b.sort((a, b) => a < b));
console.log(b.sort((a, b) => a > b));
console.log(b.sort((a, b) => a >> 1 < b))
console.log(b.mutmap(x => x >> 1));
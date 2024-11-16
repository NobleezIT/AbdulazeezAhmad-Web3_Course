let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened);
// → [1, 2, 3, 4, 5, 6]
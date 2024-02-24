const binarySearch = require('./binarySearch').default;

console.log('App is running');

let haystack = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(haystack);

let needle = 8;
console.log(`needle: ${needle}`);
const result = binarySearch(haystack,needle);

console.log(result);




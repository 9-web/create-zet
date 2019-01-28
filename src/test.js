const path = require('path');

console.log(path.extname('text.txt'))
console.log(path.basename('text.txt', path.extname('text.txt')))

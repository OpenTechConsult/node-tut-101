const path = require('path');

// get the files separator
console.log(path.sep);

// use of the path.join
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// get the basename of a path
const base = path.basename(filePath);
console.log(base);

// get the absolute path from path segments
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
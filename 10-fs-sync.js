const {readFileSync, writeFileSync} = require('fs');

// read file content the blocking way
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// create a new file
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`);

// create a new file by appending to the existing file.
writeFileSync('./content/result-sync.txt', 
  `Here is the result: ${first}, ${second}`, 
  {flag: 'a'}
);
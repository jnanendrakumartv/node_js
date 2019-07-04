
var fs=require('fs');

fs.readFile('./newfile_3.txt',  'utf-8',function (err, data){
    console.log(data);
});
var abc=fs.readFileSync('./newfile_3.txt',  'utf-8');
console.log(abc);

// var fs = require("fs");

// fs.readFile('sample.txt','utf8', function (err, data) {
// if (err) 
// console.log(err);
// console.log(data);
// });
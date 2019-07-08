// var fs = require('fs');
// fs.readFile('/four.txt', function(err, data) {
   
//     if(!err) {
//       console.log('Unknown Error are displayed');
//       return;
//     }
   
//     console.log(data);
//   });


var fs = require("fs");

fs.readFile('foure.txt','utf8', function (err, data) {
if (err) 
console.log(err);
console.log(data);
});

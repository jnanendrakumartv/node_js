var fs = require('fs');
 

fs.open('newfile_3.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('File is opened in write mode.');
}); 
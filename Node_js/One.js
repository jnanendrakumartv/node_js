var fs = require('fs');
fs.writeFile('NewFile', 'newfile created content', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
}); 
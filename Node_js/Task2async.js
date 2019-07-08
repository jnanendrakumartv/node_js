var fs = require('fs');
fs.readFile('/first.txt', function(err, data) {
   
    if(err) {
      console.log('Unknown Error are displayed');
      return;
    }
   
    console.log(data);
  });
  
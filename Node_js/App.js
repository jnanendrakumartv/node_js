var http = require('http');
const server = http.createServer((req,res)=>{
    res.end("Server End");
    console.log(res);
});
server.listen(3000, function(){
    console.log("First server running");
});


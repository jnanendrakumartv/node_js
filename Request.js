
var a=require('http');
const b=a.createServer((req,res)=>{
    console.log(
         //req.method
        req.headers
        // req.url
        );
})
b.listen(3000,function(){
    console.log()
});
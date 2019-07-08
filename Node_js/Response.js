var server=require('http');
const b = server.createServer((req,res)=>{
res.setHeader('Content-type','text/html')
res.write('<html>')
res.write('<head><title>Welcome</title></head>')
res.write('<body> <h1>Hi Jnanendra</h1> <h2>Welcome To Qwinix</h2> <h3>As a New employee</h3>')
res.write('<p> </p>')
res.write('</body')
res.write('</html>')
res.end();
});
b.listen(3001);
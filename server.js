const http=require("http");

http.createServer((req, res)=>{

res.writeHead(200,{'Context-type':'text/plain'})
res.end("i am runing bakcemnd")

}).listen(8181,'127.0.0.1');
console.log('hello');
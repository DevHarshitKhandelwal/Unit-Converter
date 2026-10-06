const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("home Page")
    }
    if(req.url == "/length"){
        const html = fs.readFileSync("length.html","utf-8");
        res.writeHead(200,{
            "content-type": "text/html"
        })
        res.end(html);
    }
    if(req.url == "/weight"){
        const html = fs.readFileSync("weight.html","utf-8");
        res.writeHead(200,{
            "content-type": "text/html"
        })
        res.end(html);
    }
    if(req.url == "/temp"){
        const html = fs.readFileSync("temp.html","utf-8");
        res.writeHead(200,{
            "content-type": "text/html"
        })
        res.end(html);
    }

})

server.listen(3000,()=>{
    console.log("server running on 3000");
})
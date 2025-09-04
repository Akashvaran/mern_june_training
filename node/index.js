const http=require('http')

const port=3500;

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"contentType":"text/html"})
    res.end("<p>hello this a node js server hhgchjjhcjhc</p>")
})

server.listen(port,()=>{
    console.log(`server is  running ${port}`)
}) 
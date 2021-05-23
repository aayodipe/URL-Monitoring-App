//Dependencies
let http = require('http')


var server = http.createServer((req, res)=>{
    // send a respond
    res.end('Hello World\n')
})

// Start the server, and have it listen to port 3000

server.listen(3000, ()=>console.log('Server is listen to port 3000'))
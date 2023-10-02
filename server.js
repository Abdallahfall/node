var fs = require('fs');
var http = require ('http')
const server = http.createServer ((req, res)=>{
   file = fs.createReadStream ('index.html')
   file.pipe(res)
})
server.listen('3000')
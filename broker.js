const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 8080

server.listen(port, function () {
  console.log('server started and listening on port ', port)
})
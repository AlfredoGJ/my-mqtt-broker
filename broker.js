const aedes = require('aedes')()
const httpServer = require('http').createServer()
const ws = require('websocket-stream')

ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(process.env.PORT || 8080, function () {
  console.log('websocket server listening on port ', port)
})
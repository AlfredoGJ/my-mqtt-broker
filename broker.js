const aedes = require('aedes')()
const http = require('http')
const ws = require('websocket-stream')

function initBroker(){
    port = process.env.PORT || 8080
    httpServer = http.createServer()
    ws.createServer({ server: httpServer }, aedes.handle)
    
    return {
        start:function () {
            httpServer.listen(port, function () {
                console.log('websocket server listening on port ', port)
            })
        }
    }
}

module.exports = initBroker();

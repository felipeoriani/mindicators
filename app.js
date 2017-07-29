var express = require('express')
var bodyParser = require('body-parser')

var controllers = require('./application/init')
var config = require('./application/config')

var server = express()
server.use(bodyParser.json())

controllers.start(server)

server.listen(config.PORT, () => {
  console.log(`${server.name} listening at port ${config.PORT}`)
})
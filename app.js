const express = require('express')

var controllers = require('./application/init')
var config = require('./application/config/config')

var server = express()

controllers.start(server)

server.listen(config.PORT, () => {
  console.log(`${server.name} listening at port ${config.PORT}`)
})
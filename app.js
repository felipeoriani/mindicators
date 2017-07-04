var express = require('express')
var bodyParser = require('body-parser')
var Container = require('./application/util/ioc')

var ioc = new Container();

ioc.bind('userRepository', require('./application/data/userRepository'))
ioc.bind('userService', require('./application/business/userService'))

global.ioc = ioc;

var controllers = require('./application/init')
var config = require('./application/config')

var server = express()

server.use(bodyParser.json())

controllers.start(server)

server.listen(config.PORT, () => {
  console.log(`${server.name} listening at port ${config.PORT}`)
})
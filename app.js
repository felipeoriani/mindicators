var express = require('express')
var bodyParser = require('body-parser')
var Container = require('./application/util/ioc')

var controllers = require('./application/init')
var config = require('./application/config')
var db = require('./application/data/db')

var server = express()
server.use(bodyParser.json())

var ioc = new Container()
ioc.bind('db', db)
global.ioc = ioc

controllers.start(server, ioc)

server.listen(config.PORT, () => {
  console.log(`${server.name} listening at port ${config.PORT}`)
})
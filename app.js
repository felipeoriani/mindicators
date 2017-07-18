var express = require('express')
var bodyParser = require('body-parser')
var Container = require('./application/util/ioc')

var controllers = require('./application/init')
var config = require('./application/config')
var db = require('./application/data/db')

var server = express()

server.use(bodyParser.json())

var ioc = new Container();

controllers.start(server, ioc)

global.ioc = ioc
global.db = db

server.listen(config.PORT, () => {
  console.log(`${server.name} listening at port ${config.PORT}`)
})
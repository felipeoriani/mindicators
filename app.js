const restify = require('restify')
var controllers = require('./application/init')

var server = restify.createServer()

controllers.start(server)

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url)
})

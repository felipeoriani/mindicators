const fs = require('fs')
const path = require('path')

var initControllers = function (server) {

  var currentPath = path.resolve(`${__dirname}/api/controllers`)

  var controllers = fs.readdirSync(currentPath)

  controllers.forEach(item => {

    var basename = path.basename(item, '.js').replace('Controller', '')

    var controller = require(`./api/controllers/${item}`)

    server.use(`/${basename}`, controller)
  })
}

var initContainer = function (container) {
  
  var dataPath = path.resolve(`${__dirname}/data/repositories`)
  var servicePath = path.resolve(`${__dirname}/business`)
  
  var repositories = fs.readdirSync(dataPath)
  var services = fs.readdirSync(servicePath)

  repositories.forEach(item => {

    var basename = path.basename(item, '.js');

    var repositoryType = require(`./data/repositories/${basename}`)

    container.bind(basename, repositoryType)
  })

  services.forEach(item => {

    var basename = path.basename(item, '.js');

    var serviceType = require(`./business/${basename}`)

    container.bind(basename, serviceType)
  })
}

module.exports.start = function (server, container) {
  // look for all controllers and init the routes over the server  
  initControllers(server)
  // bind all types on the container of each layer
  initContainer(container)
}
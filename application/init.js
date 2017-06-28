const fs = require('fs')
const path = require('path')

module.exports.start = function (server) {

  var currentPath = path.resolve(__dirname + '/controllers')

  var controllers = fs.readdirSync(currentPath)

  controllers.forEach(item => {

    var controllerPath = path.join(currentPath, item).replace(/\\/g, '/')

    var controller = require(controllerPath)

    controller.init(server);
  })
}
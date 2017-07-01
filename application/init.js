const fs = require('fs')
const path = require('path')

module.exports.start = function (server) {

  var currentPath = path.resolve(`${__dirname}/api/controllers`)

  var controllers = fs.readdirSync(currentPath)

  controllers.forEach(item => {

    var basename = path.basename(item, '.js').replace('Controller', '')

    var controller = require(`./api/controllers/${item}`)

    server.use(`/${basename}`, controller)

  })
}
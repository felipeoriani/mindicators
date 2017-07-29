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


var init = function() {

  // define serialization for Errors
  if (!('toJSON' in Error.prototype)) {
    Object.defineProperty(Error.prototype, 'toJSON', {
      value: function () {
          var alt = {}

          Object.getOwnPropertyNames(this).forEach(key => {
              alt[key] = this[key]
          }, this)

          return alt
      },
      configurable: true,
      writable: true
    })
  }
}

module.exports.start = function (server) {
  // general init
  init()  
  // look for all controllers and init the routes over the server  
  initControllers(server)
}
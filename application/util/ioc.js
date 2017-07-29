const fs = require('fs')
const path = require('path')
const db = require('../data/db')

class Container {
    constructor() {
        this.modules = {}

        this.paramParser = new Proxy(this, {
            // The `get` handler is invoked whenever a get-call for
            // `injector.*` is made. We make a call to an external service
            // to actually hand back in the configured service. The proxy
            // allows us to bypass parsing the function params using
            // taditional regex or even the newer parser.
            get: (target, name) => target.get(name),

            // You shouldn't be able to set values on the injector.
            set: (target, name, value) => {
                throw new Error(`Do not try to set ${name}!`);
            }
        });
    }

    get(name) {
        var objectType = this.modules[name]

        if (typeof objectType === 'object')
            return objectType;

        return new objectType(this.paramParser)
    }

    bind(name, module) {
        this.modules[name] = module
    }    
}

var register = function(container) {
    console.log(__dirname)

    var dataPath = path.resolve(`${__dirname}/../data/repositories`)
    var servicePath = path.resolve(`${__dirname}/../business`)

    var repositories = fs.readdirSync(dataPath)
    var services = fs.readdirSync(servicePath)

    repositories.forEach(item => {

        var basename = path.basename(item, '.js');

        var repositoryType = require(`../data/repositories/${basename}`)

        container.bind(basename, repositoryType)
    })

    services.forEach(item => {

        var basename = path.basename(item, '.js');

        var serviceType = require(`../business/${basename}`)

        container.bind(basename, serviceType)
    })

    container.bind('db', db)
}

if (!global.ioc) {
    var ioc = new Container()

    register(ioc)

    global.ioc = ioc
}

module.exports = global.ioc
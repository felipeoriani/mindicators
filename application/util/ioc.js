var inversionOfControl = class InversionOfControl {
    constructor() {
        this.modules = {}
    }
    get(name) {
        return this.getInjector()(this.modules[name])
    }
    bind(name, module) {
        this.modules[name] = module
    }
    getInjector() {
        var container = this

        return (klass) => {
            console.log(klass);
            var paramParser = new Proxy({}, {
                // The `get` handler is invoked whenever a get-call for
                // `injector.*` is made. We make a call to an external service
                // to actually hand back in the configured service. The proxy
                // allows us to bypass parsing the function params using
                // taditional regex or even the newer parser.
                get: (target, name) => container.get(name),

                // You shouldn't be able to set values on the injector.
                set: (target, name, value) => {
                    throw new Error(`Don't try to set ${name}! 😑`);
                }
            })
            return new klass(paramParser);
        }
    }
}



module.exports = inversionOfControl
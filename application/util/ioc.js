var inversionOfControl = class InversionOfControl {
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

module.exports = inversionOfControl
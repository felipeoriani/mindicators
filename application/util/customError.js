module.exports = class BusinessError extends Error {
    constructor(errorMessage, validation) {
        super(errorMessage)
        this.validation = validation
    }

    toJson() {
        return Jthis.validation
    }    
}
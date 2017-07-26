module.exports = class BusinessError extends Error {
    constructor(errorMessage, validation) {
        super(errorMessage)
        this.validation = validation
    }

    toJSON() {
        return this.validation
    }    
}
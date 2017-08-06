var BusinessError = require('../util/customError')

module.exports = class ValueService {
    
    constructor({valueRepository}) {
        this.valueRepository = valueRepository
        this.validation = [];
    }
    
    getByIndicator(id) {
        return this.valueRepository.getByIndicator(id)
    }

    get(id) {
        return this.valueRepository.get(id)
    }

    save(value) {
        return this.validate(value).then(() => {
            if (!this.isValid())
                throw new BusinessError('Value', this.validation)

            return this.valueRepository.save(value)
        });
    }

    update(value) {
        return this.validate(value).then(() => {
            if (!this.isValid())
                throw new BusinessError('Value', this.validation)

            return this.valueRepository.update(value)
        });
    }

    delete(id) {
        return this.valueRepository.delete(id)
    }

    validate(value) {

        return Promise.resolve().then(() => {
            if (!value) {
                this.validation.push({ field: 'all', error: 'The indicator information was not correctly provided.' })
            }
            else {
                if (!value.date) {
                    this.validation.push({ field: 'date', error: 'The date field is required.' })                
                }

                if (!value.value) {
                    this.validation.push({ field: 'value', error: 'The value field is required.' })
                }                
            }
            
            return this.isValid()
        })
    }

    isValid() {
        return this.validation.length === 0
    }
}
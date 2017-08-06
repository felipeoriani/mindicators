var BusinessError = require('../util/customError')

module.exports = class IndicatorService {
    
    constructor({indicatorRepository}) {
        this.indicatorRepository = indicatorRepository
        this.validation = [];
    }
    
    getByGroup(id) {
        return this.indicatorRepository.getByGroup(id)
    }

    get(id) {
        return this.indicatorRepository.get(id)
    }

    save(indicator) {
        return this.validate(indicator).then(() => {
            if (!this.isValid())
                throw new BusinessError('Indicator', this.validation)

            return this.indicatorRepository.save(indicator)
        });
    }

    update(indicator) {
        return this.validate(indicator).then(() => {
            if (!this.isValid())
                throw new BusinessError('Indicator', this.validation)

            return this.indicatorRepository.update(indicator)
        });
    }

    delete(id) {
        return this.indicatorRepository.delete(id)
    }

    validate(indicator) {

        return Promise.resolve().then(() => {
            if (!indicator) {
                this.validation.push({ field: 'all', error: 'The indicator information was not correctly provided.' })
            }
            else {
                
                var periodicities = ['D', 'W', 'M', 'Y'];                
                var types = ['N', 'C'];

                if (!indicator.name) {
                    this.validation.push({ field: 'name', error: 'The name field is required.' })                
                }

                if (!indicator.type) {
                    this.validation.push({ field: 'type', error: 'The type field is required.' })
                } else if (types.indexOf(indicator.type) === -1) {
                    this.validation.push({ field: 'type', error: 'The type field is not valid.' })
                }                

                if (!indicator.periodicity) {
                    this.validation.push({ field: 'periodicity', error: 'The periodicity field is required.' })
                } else if (periodicities.indexOf(indicator.periodicity) === -1) {
                    this.validation.push({ field: 'periodicity', error: 'The periodicity field is not valid.' })
                }

                if (!indicator.groupId) {
                    this.validation.push({ field: 'groupId', error: 'The group field is required.' })
                }
            }
            
            return this.isValid()

        }).then(isValid => {

            if (isValid) {
                return this.indicatorRepository.existsName(indicator).then(count => {
                    if (count > 0)
                        this.validation.push({ field: 'name', error: 'The name already exists for this group.' })
                })
            }
        })
    }

    isValid() {
        return this.validation.length === 0
    }
}
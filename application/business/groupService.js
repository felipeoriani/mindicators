var BusinessError = require('../util/customError')

module.exports = class GroupService {
    
    constructor({groupRepository}) {
        this.groupRepository = groupRepository
        this.validation = [];
    }
    
    getAll() {
        return this.groupRepository.getAll()
    }

    getByParent(id) {
        return this.groupRepository.getByParent(id)
    }

    get(id) {
        return this.groupRepository.get(id)
    }

    save(group) {
        return this.validate(group).then(() => {
            if (!this.isValid())
                throw new BusinessError('Group', this.validation)

            return this.groupRepository.save(group)
        });
    }

    update(group) {
        return this.validate(group).then(() => {
            if (!this.isValid())
                throw new BusinessError('Group', this.validation)

            return this.groupRepository.update(group)
        });
    }

    delete(id) {
        return this.groupRepository.delete(id)
    }

    validate(group) {

        return Promise.resolve().then(() => {
            if (!group) {
                this.validation.push({ field: 'all', error: 'The group information was not correctly provided.' })
            }
            else if (!group.name) {
                this.validation.push({ field: 'name', error: 'The field name is required.' })
            }
            
            return this.isValid()

        }).then(isValid => {

            if (isValid) {
                return this.groupRepository.existsName(group).then(count => {
                    if (count > 0)
                        this.validation.push({ field: 'name', error: 'The name already exists.' })
                })
            }
        })
    }

    isValid() {
        return this.validation.length === 0
    }
}
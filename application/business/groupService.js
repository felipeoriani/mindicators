var BusinessError = require('../util/customError')

module.exports = class GroupService {
    
    constructor({groupRepository}) {
        this.groupRepository = groupRepository
        this.validation = [];
    }
    
    getAll() {
        return this.groupRepository.getAll()
    }

    getByParent(parentId) {
        return null;
    }

    get(id) {
        return this.groupRepository.get(id)
    }

    save(group) {

        return this.validate(group).then(() => {
            return this.groupRepository.save(group);
        });

    }

    validate(group) {
        
        if (!group) {
            this.validation.push({ field: 'all', error: 'The group information was not correctly provided.' })
        }
        else if (!group.name) {
            this.validation.push({ field: 'name', error: 'The field name is required.' })
        } 
        
        if (this.validation.length > 0)
            return Promise.reject(new BusinessError('Group', this.validation))

        return Promise.all([
            this.groupRepository.existsName(group).then(c => {
                if (c > 0)
                    this.validation.push({ field: 'name', error: 'The field name already exists.' })
            })]
        ).then(() => {
            if (this.validation.length > 0)
                throw new BusinessError('Group', this.validation)
        })
    }
}
module.exports = class GroupService {
    
    constructor({groupRepository}) {
        this.groupRepository = groupRepository
    }
    
    get() {
        return this.groupRepository.get()
    }

    get(id) {
        return this.groupRepository.get(id)
    }

    create(group) {
        return this.groupRepository.create(group);
    }

}
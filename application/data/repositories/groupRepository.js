module.exports = class GroupRepository {

    constructor({db}) {
        this.db = db;
    }

    get() {
        console.log('findAll')
        return this.db.Group.findAll()
    }

    get(id) {
        console.log('findById')
        return this.db.Group.findById(id)
    }

    create(group) {

        if (!group)
            throw 'You must provide a group information.'

        if (!group.name || group.name === '')
            throw 'The name property is required.'

        return this.db.Group.create(group);
    }
}
var BaseRepository = require('../baseRepository');

module.exports = class GroupRepository extends BaseRepository {

    constructor({db}) {
        super(db, 'Group')
    }

    existsName(group) {
        return this.query.count({ where: { 'name': { $eq: group.name }}  })
    }
}
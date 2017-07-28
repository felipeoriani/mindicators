var BaseRepository = require('../baseRepository');

module.exports = class GroupRepository extends BaseRepository {

    constructor({db}) {
        super(db, 'Group')
    }

    getByParent(id) {
        return this.query.findAll({
            where: {
                groupId: id
            }
        })
    }

    existsName(group) {
        var expression = { where: { 'name': group.name }  }

        if (group && group.id)
            expression.where.id = { $ne: group.id }

        return this.query.count(expression)
    }
}
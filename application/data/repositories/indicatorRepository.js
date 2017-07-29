var BaseRepository = require('../baseRepository');

module.exports = class IndicatorRepository extends BaseRepository {

    constructor({db}) {
        super(db, 'Indicator')
    }

    getByGroup(id) {
        return this.query.findAll({
            where: {
                groupId: id
            }
        })
    }

    existsName(indicator) {
        var expression = { where: { 'name': indicator.name, 'groupId': indicator.groupId }  }

        if (indicator) {
            if (indicator.id)
                expression.where.id = { $ne: indicator.id }
        }            

        return this.query.count(expression)
    }

}
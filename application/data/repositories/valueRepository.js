var BaseRepository = require('../baseRepository');

module.exports = class ValueRepository extends BaseRepository {

    constructor({db}) {
        super(db, 'Value')
    }

    getByIndicator(id) {
        return this.query.findAll({
            where: {
                indicatorId: id
            },
            order: ['date']
        })
    }
}
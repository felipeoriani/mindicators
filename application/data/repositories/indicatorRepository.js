var BaseRepository = require('../baseRepository');

module.exports = class IndicatorRepository extends BaseRepository {

    constructor({db}) {
        super(db, 'Indicator')
    }
}
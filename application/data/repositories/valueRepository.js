var BaseRepository = require('../baseRepository');

module.exports = class ValueRepository extends BaseRepository {

    constructor({db}) {
        super(db, 'Value')
    }
}
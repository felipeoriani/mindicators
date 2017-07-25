var BaseRepository = require('../baseRepository');

module.exports = class UserRepository extends BaseRepository {

    constructor({db}) {
        super(db, 'User')
    }
}
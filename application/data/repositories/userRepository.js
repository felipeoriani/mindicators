module.exports = class UserRepository {

    constructor({db}) {
        this.db = db;
    }

    get() {
        return this.db.User.findAll()
    }

    add(user) {
        return this.db.User.create(user);
    }
}
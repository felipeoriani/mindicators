module.exports = class UserRepository {

    get() {
        return global.db.User.findAll()
    }

    add(user) {
        return global.db.User.create(user);
    }
}
module.exports = class UserRepository {

    constructor() {
        this._users = [{ name: 'John' }, { name: 'Paul' }, { name: 'George' }, { name: 'Ringo' }]
    }

    get() {
        return this._users
    }

    add(user) {
        this._users.push(user)
    }
}
module.exports = class BaseRepository {
    
    constructor(db, model) {
        this.db = db
        this.model = model

        this.query = db[model];
    }

    getAll() {
        return this.query.findAll()
    }

    get(id) {
        return this.query.findById(id)
    }

    save(obj) {
        return this.query.create(obj)
    }
}
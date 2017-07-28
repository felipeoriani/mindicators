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

    update(obj) {
        return this.query.update(obj, { where: { id: obj.id }})
    }

    delete(id) {
        return this.query.destroy({ where: { id } })
    }
}
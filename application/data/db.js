
const fs = require("fs")
const path = require("path")

var Sequelize = require('sequelize')

var sequelize = new Sequelize('mindicators', 'sa', 'toor', {
  host: 'localhost',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

sequelize.authenticate()
         .then(() => {
             console.log('Connection has been established successfully.')
         }).catch(err => {
             console.log('Unable to connect on the database. Error: ', err)
             throw err
         })

var db = {}

var modelPath = path.join(__dirname, '../model')

fs.readdirSync(modelPath)
  .filter(file => file.indexOf(".") !== 0)
  .forEach(file => {
    var model = sequelize.import(path.join(modelPath, file))
    db[model.name] = model
  });

Object.keys(db).forEach(modelName => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
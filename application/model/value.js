var Tedious = require('tedious');

module.exports = function (sequelize, DataTypes) {

  var Value = sequelize.define('Value', {
    id: {
      field: 'Id',
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },  
    date: {
      field: 'Date',
      type: Tedious.TYPES.DateTime2,
      allowNull: false
    },
    value: {
      field: 'Value',
      type: DataTypes.DECIMAL(18, 4),
      allowNull: false
    },
    indicatorId: {
      field: 'IndicatorId',
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: sequelize.models.Indicator,
        key: 'Id'
    }
  }
  }, {
    schema: 'dbo',
    freezeTableName: true,
    timestamps: false
  });

  return Value;

};
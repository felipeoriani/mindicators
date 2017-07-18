module.exports = function (sequelize, DataTypes) {

  var Indicator = sequelize.define('Indicator', {
    id: {
      field: 'Id',
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      field: 'Name',
      type: DataTypes.STRING(100),
      allowNull: false
    },  
    type: {
      field: 'Type',
      type: DataTypes.ENUM('N', 'C'), // N - Normal, 'C' -  Calculated
      allowNull: false
    },
    periodicity: {
      field: 'Periodicity',
      type: DataTypes.ENUM('D', 'W', 'M', 'Y'), // D - Daily, W - Weekly, M - Monthly, Y - Yearly
      allowNull: false
    },
    groupId: {
      field: 'GroupId',
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: sequelize.models.Group,
        key: 'Id'
      }
    }
  }, {
    schema: 'dbo',
    freezeTableName: true,
    timestamps: false
  });

  return Indicator;

};
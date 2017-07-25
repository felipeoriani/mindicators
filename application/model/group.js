module.exports = function (sequelize, DataTypes) {

  var Group = sequelize.define('Group', {
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
    groupId: {
      field: 'GroupId',
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    schema: 'dbo',
    freezeTableName: true,
    timestamps: false
  });

  return Group;
};
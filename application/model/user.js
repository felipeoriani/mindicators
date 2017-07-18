module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    id: {
      field: 'Id',
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    firstName: {
      field: 'FirstName',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastName: {
      field: 'LastName',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userName: {
      field: 'UserName',
      type: DataTypes.STRING(60),
      allowNull: false
    },
    password: {
      field: 'Password',
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    schema: 'dbo',
    freezeTableName: true,
    timestamps: false
  });

  return User;
};
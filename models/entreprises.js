/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entreprises', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    createdAt: { field: 'created_at',
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: { field: 'created_at',
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    address_longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    address_latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    field_of_work: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entreprises'
  });
};

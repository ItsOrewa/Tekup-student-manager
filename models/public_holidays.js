/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('public_holidays', {
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    permanent: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 1
    },
    holiday_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'public_holidays'
  });
};

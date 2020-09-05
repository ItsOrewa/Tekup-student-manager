/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migrations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    migration: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    batch: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'migrations'
  });
};

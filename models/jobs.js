/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    queue: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    payload: {
      type: 'LONGTEXT',
      allowNull: false
    },
    attempts: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    reserved_at: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    available_at: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    createdAt: { field: 'created_at',
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jobs'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permission_user', {
    permission_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_type: {
      type: DataTypes.STRING(191),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'permission_user'
  });
};

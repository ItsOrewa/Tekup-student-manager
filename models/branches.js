/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branches', {
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
    responsible_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id'
      }
    },
    levels: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'branches'
  });
};

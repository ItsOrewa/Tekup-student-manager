/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pv_titles', {
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
    branch_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'branches',
        },
        key: 'id'
      }
    },
    level: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    show_option: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pv_titles'
  });
};

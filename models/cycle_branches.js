/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cycle_branches', {
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
    cycle_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'cycles',
        },
        key: 'id'
      }
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
    predecessor_branch_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'branches',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cycle_branches'
  });
};

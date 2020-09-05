/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mark_permissions', {
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
    period_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'periods',
        },
        key: 'id'
      }
    },
    class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'classes',
        },
        key: 'id'
      }
    },
    allow_rescue_marks: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    allow_mark_coefficients: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mark_permissions'
  });
};

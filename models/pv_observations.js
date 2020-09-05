/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pv_observations', {
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
    observation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    observation_rescue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    observable_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    observable_type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'students',
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
    admin_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'administrators',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pv_observations'
  });
};

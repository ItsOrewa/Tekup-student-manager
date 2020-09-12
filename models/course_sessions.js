/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course_sessions', {
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
    coursePlanId: { field:'course_plan_id',
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'course_plans',
        },
        key: 'id'
      }
    },
    time_table_fragment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'time_table_fragments',
        },
        key: 'id'
      }
    },
    course_type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    classroom_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'classrooms',
        },
        key: 'id'
      }
    },
    class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'classes',
        },
        key: 'id'
      }
    },
    occured: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'course_sessions'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_course_plan_marks', {
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
    rescue_average: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rescue_mark: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    average: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    module_name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    course_name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    course_plan_coefficient: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    course_plan_hourly_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    course_plan_total_weighting: {
      type: DataTypes.DOUBLE,
      allowNull: true
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
    course_plan_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'course_plans',
        },
        key: 'id'
      }
    },
    branch_level_plan_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'branch_level_plans',
        },
        key: 'id'
      }
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
    session_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'sessions',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'student_course_plan_marks'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course_plans', {
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
    branchLevelPlanId: {field: 'branch_level_plan_id',
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'branch_level_plans',
        },
        key: 'id'
      }
    },
    courseId: {field:'course_id',
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'courses',
        },
        key: 'id'
      }
    },
    hourly_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    etcs: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    coefficient: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'course_plans'
  });
};

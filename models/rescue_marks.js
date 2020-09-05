/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rescue_marks', {
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
    mark: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    course_plan_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'course_plans',
        },
        key: 'id'
      }
    },
    student_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'students',
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
    }
  }, {
    sequelize,
    tableName: 'rescue_marks'
  });
};

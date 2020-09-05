/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inaccessible_marks', {
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
    assignment_student_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'assignment_students',
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
    }
  }, {
    sequelize,
    tableName: 'inaccessible_marks'
  });
};

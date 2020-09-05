/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professor_courses', {
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
    professor_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'professors',
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
    course_type: {
      type: DataTypes.STRING(191),
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'professor_courses'
  });
};

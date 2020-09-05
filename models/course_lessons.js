/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course_lessons', {
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
    course_chapter_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'course_chapters',
        },
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    completed: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    course_session_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'course_sessions',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'course_lessons'
  });
};

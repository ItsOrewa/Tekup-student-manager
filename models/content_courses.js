/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('content_courses', {
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
    professor_course_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'professor_courses',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'content_courses'
  });
};

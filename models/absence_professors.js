/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('absence_professors', {
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
      allowNull: false
    },
    course_session_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'absence_professors'
  });
};

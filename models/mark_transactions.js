/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mark_transactions', {
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
    author_user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    author_fullname: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    class_name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    course_plan_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    course_name: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mark_transactions'
  });
};

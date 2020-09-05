/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('week_course_plans', {
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
    week_number: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    course_type: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'week_course_plans'
  });
};

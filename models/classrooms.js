/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classrooms', {
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
    bloc: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    max_attendance: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    state: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'classrooms'
  });
};

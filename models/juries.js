/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('juries', {
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
    jury_professor_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'juries'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professors', {
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
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id'
      }
    },
    grade: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    cin_delivered_at: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    cnrps: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cnss: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'professors'
  });
};

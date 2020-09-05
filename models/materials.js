/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('materials', {
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
    description: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    identifier: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    rentable: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    occupant_request_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'material_rents',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'materials'
  });
};

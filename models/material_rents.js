/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('material_rents', {
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
      type: DataTypes.TEXT,
      allowNull: true
    },
    rate_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    request_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_rate_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_rate_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id'
      }
    },
    material_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'materials',
        },
        key: 'id'
      }
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    release_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'material_rents'
  });
};

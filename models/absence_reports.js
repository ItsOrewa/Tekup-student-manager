/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('absence_reports', {
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
    reason: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    start_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    group_documents_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'group_documents',
        },
        key: 'id'
      }
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
    admin_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'absence_reports'
  });
};

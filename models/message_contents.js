/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message_contents', {
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
    type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    document_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'documents',
        },
        key: 'id'
      }
    },
    text: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'message_contents'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mark_logs', {
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
    mark: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mark_type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    student_fullname: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    mark_transaction_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'mark_transactions',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mark_logs'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
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
    phone: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(191),
      allowNull: false
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
    address_longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    address_latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cin_delivered_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    name_ar: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    lastname_ar: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    address_ar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_mode: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    tekup_email: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    date_inscription: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'students'
  });
};

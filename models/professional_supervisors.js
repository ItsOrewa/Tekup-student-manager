/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professional_supervisors', {
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
    fullname: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    entreprise_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'professional_supervisors'
  });
};

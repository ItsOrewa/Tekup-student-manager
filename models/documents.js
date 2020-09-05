/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    taille: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    extension: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    createdAt: { field: 'created_at',
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: { field: 'created_at',
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'documents'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testimonials', {
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
    for: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    destination: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    mark: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    anonym: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'testimonials'
  });
};

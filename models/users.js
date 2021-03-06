/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
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
    email: {
      type: DataTypes.STRING(191),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    image_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'documents',
        },
        key: 'id'
      }
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('Male','Female','Androgyne'),
      allowNull: false
    },
    cin: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users'
  });
};

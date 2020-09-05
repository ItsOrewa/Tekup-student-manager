/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('class_period_marks', {
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
    average: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    min_average: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    max_average: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    standard_deviation: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    period_total_coefficient: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    period_total_hourly_amount: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    period_name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    class_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'classes',
        },
        key: 'id'
      }
    },
    period_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'periods',
        },
        key: 'id'
      }
    },
    session_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'sessions',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'class_period_marks'
  });
};

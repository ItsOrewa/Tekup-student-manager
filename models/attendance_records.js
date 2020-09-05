/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendance_records', {
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
    student_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'students',
        },
        key: 'id'
      }
    },
    course_session_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: {
          tableName: 'course_sessions',
        },
        key: 'id'
      }
    },
    present: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    latecomer: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    absent: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    arrival_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    absence_justification_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: {
          tableName: 'absence_reports',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'attendance_records'
  });
};

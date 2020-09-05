/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('internships', {
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
    subject: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    aim: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    status_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    academic_supervisor_professor_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    professional_supervisor_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    candidate1_student_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    candidate2_student_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    candidate3_student_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    assignment_document_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    specification_document_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    proposal_document_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    certificate_document_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    degree_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    mark: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'internships'
  });
};

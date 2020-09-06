const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("tekup", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  timestamps: false,
});

async function auth() {
  try {
    await sequelize.authenticate();
    
    const {
      student,
      mark,
      course_plan,
      course,
      mark_coefficient,
    } = require("./models");
    mark.belongsTo(course_plan);
    course_plan.belongsTo(course)
    mark.belongsTo(mark_coefficient);
    await sequelize.sync({ logging: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
auth();

module.exports = { sequelize };

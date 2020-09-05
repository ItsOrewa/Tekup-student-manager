const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("tekup", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  timestamps: false,
});

async function auth() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ logging: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
auth();

module.exports = { sequelize };

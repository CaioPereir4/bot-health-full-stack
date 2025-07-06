const Sequelize = require("sequelize");
const sequelize = new Sequelize("bothealth", "postgres", "postgres", {
    dialect: "postgres"
});

module.exports = sequelize;


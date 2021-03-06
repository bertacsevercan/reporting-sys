const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.report = require("../models/report.model.js")(sequelize, Sequelize);
db.file = require("../models/file.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.user.belongsToMany(db.report, {
  through: "user_reports",
  foreignKey: "userId",
  otherKey: "reportId",
});

db.report.belongsToMany(db.user, {
  through: "user_reports",
  foreignKey: "reportId",
  otherKey: "userId",
});

db.user.belongsToMany(db.file, {
  through: "user_file",
  foreignKey: "userId",
  otherKey: "fileId",
});

db.file.belongsToMany(db.user, {
  through: "user_file",
  foreignKey: "fileId",
  otherKey: "userId",
});

db.ROLES = ["user", "admin"];

module.exports = db;

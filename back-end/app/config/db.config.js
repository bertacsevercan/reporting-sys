const atob = require("atob");
const PW_ENC = "RzQwY2dGY2lSUlJ6eEttRw==";
const PW_DEC = atob(PW_ENC);
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: PW_DEC,
  DB: "report_sys",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const atob = require("atob");
const SECRET_ENC = "dGhpc19pc190aGVfd2F5";
const SECRET_DEC = atob(SECRET_ENC);
module.exports = {
  secret: SECRET_DEC,
};

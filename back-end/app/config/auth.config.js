const atob = require("atob");
const SECRET_ENC = "dGhpc19pc190aGVfd2F5";
const SECRET_DEC = atob(SECRET_ENC);
console.log(SECRET_DEC)
module.exports = {
  secret: "this_is_the_way",
};

const { verifySignUp } = require("../middleware");
const controller = require("../controllers/file.controller");
const { authJwt } = require("../middleware");
const uploadFile = require("../middleware/upload");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/upload", uploadFile.single("file"), controller.upload, [
    authJwt.verifyToken,
  ]);
};

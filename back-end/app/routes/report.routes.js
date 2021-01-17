const controller = require("../controllers/report.controller");
const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/report", controller.createReport, [authJwt.verifyToken]);
  app.get("/api/report", controller.findAll, [authJwt.verifyToken]);
  app.get("/api/report/location", controller.locationTotal, [
    authJwt.verifyToken,
  ]);
  app.get("/api/report/estate", controller.estateTotal, [authJwt.verifyToken]);
  app.get("/api/report/rooms", controller.roomTotal, [authJwt.verifyToken]);
  app.get("/api/report/date", controller.roomTotal, [authJwt.verifyToken]);
  /*  app.get("/api/report/yearly", controller.yearlyTotal, [authJwt.verifyToken]);
  app.get("/api/report/monthly", controller.monthlyTotal, [
    authJwt.verifyToken,
  ]); */
};

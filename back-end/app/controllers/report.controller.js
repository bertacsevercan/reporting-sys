const db = require("../models");

const User = db.user;
const Report = db.report;

const Op = db.Sequelize.Op;

exports.createReport = (req, res) => {
  Report.create({
    saleAmount: req.body.saleAmount,
    saleType: req.body.saleType,
    userId: req.body.userId,
    time: req.body.time,
    location: req.body.location,
    estateType: req.body.estateType,
    roomSize: req.body.roomSize,
  })
    .then((report) => {
      report
        .setUsers(report.userId)
        .then(() => {
          res.send({ message: "Report created successfully!" });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = (req, res) => {
  const userId = req.query.userId;
  var condition = userId ? { userId: { [Op.like]: userId } } : null;

  Report.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

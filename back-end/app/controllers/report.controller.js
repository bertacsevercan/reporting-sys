const db = require("../models");
const { QueryTypes } = require("sequelize");

const User = db.user;
const Report = db.report;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
const date = new Date();
const currentYear = date.getFullYear();

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
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};

exports.locationTotal = (req, res) => {
  const userId = req.query.userId;
  const saleType = req.query.type;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: [
      "userId",
      [sq.fn("SUM", sq.col("saleAmount")), "total"],
      "location",
    ],
    where: {
      [Op.and]: [{ saleType: { [Op.eq]: saleType } }, condition],
    },
    group: ["location"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};

/* exports.locationTotal = (req, res) => {
  const userId = req.query.userId;
  const column = req.query.column;
  const saleType = req.query.type;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: ["userId", [sq.fn("SUM", sq.col("saleAmount")), "total_sold"]],
    where: {
      [Op.and]: [
        { location: { [Op.eq]: column } },
        { saleType: { [Op.eq]: saleType } },
        condition,
      ],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
}; */

exports.estateTotal = (req, res) => {
  const userId = req.query.userId;
  const saleType = req.query.type;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: [
      "userId",
      [sq.fn("SUM", sq.col("saleAmount")), "total"],
      "estateType",
    ],
    where: {
      [Op.and]: [{ saleType: { [Op.eq]: saleType } }, condition],
    },
    group: ["estateType"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};

exports.roomTotal = (req, res) => {
  const userId = req.query.userId;
  const saleType = req.query.type;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: [
      "userId",
      [sq.fn("SUM", sq.col("saleAmount")), "total"],
      "roomSize",
    ],
    where: {
      [Op.and]: [{ saleType: { [Op.eq]: saleType } }, condition],
    },
    group: ["roomSize"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};

/* exports.estateTotal = (req, res) => {
  const userId = req.query.userId;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: ["userId", [sq.fn("SUM", sq.col("saleAmount")), "total_sold", "estateType", "saleType"]],
    where : condition ,
    group : ["estateType", "saleType"]
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};


exports.roomTotal = (req, res) => {
  const userId = req.query.userId;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: ["userId", [sq.fn("SUM", sq.col("saleAmount")), "total_sold", "roomSize", "saleType"]],
    where : condition,
    group : ["roomSize", "saleType"]
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};


 */

exports.dateTotal = (req, res) => {
  const userId = req.query.userId;
  const saleType = req.query.type;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: [
      "userId",
      [sq.fn("SUM", sq.col("saleAmount")), "total"],
      "time",
    ],
    where: {
      [Op.and]: [{ saleType: { [Op.eq]: saleType } }, condition],
    },
    group: ["time"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};

exports.yearlyTotal = (req, res) => {
  const userId = req.query.userId;
  const column = req.query.column;
  const saleType = req.query.type;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: ["userId", [sq.fn("SUM", sq.col("saleAmount")), "total_sold"]],
    where: {
      [Op.and]: [
        { time: { [Op.startsWith]: column } },
        { saleType: { [Op.eq]: saleType } },
        condition,
      ],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};

exports.monthlyTotal = (req, res) => {
  const userId = req.query.userId;
  const column = req.query.column;
  const saleType = req.query.type;
  var condition = userId ? { userId: { [Op.eq]: userId } } : null;

  Report.findAll({
    attributes: ["userId", [sq.fn("SUM", sq.col("saleAmount")), "total_sold"]],
    where: {
      [Op.and]: [
        { time: { [Op.eq]: currentYear + "-" + column } },
        { saleType: { [Op.eq]: saleType } },
        condition,
      ],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reports.",
      });
    });
};

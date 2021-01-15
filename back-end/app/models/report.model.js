module.exports = (sequelize, Sequelize) => {
  const Report = sequelize.define("reports", {
    saleAmount: {
      type: Sequelize.INTEGER,
    },
    saleType: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    time: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    estateType: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    roomSize: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  return Report;
};

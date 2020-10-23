module.exports = (sequelize, Sequelize) => {
  const Repair = sequelize.define("repair", {
    repairId: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING
    }
  },{
    timestamps: true,

    createdAt: 'startDate',

    updatedAt: 'lastUpdate'
  }
  );
  return Repair;
};
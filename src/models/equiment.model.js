module.exports = (sequelize, Sequelize) => {
  const Equiment = sequelize.define("equiment", {
    equimentId: {
      type: Sequelize.INTEGER
    },
    serialNumber: {
      type: Sequelize.STRING
    },
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    equiment: {
      type: Sequelize.STRING
    },
    initialDiagnostic: {
      type: Sequelize.STRING
    },
    equimentOwner: {
      type: Sequelize.STRING
    },
    technicianReiciving: {
      type: Sequelize.STRING
    },
    initialRepairDate: {
      type: Sequelize.DATE
    },
    initialDeliveryDate: {
      type: Sequelize.DATE
    },
    endRepairDate: {
      type: Sequelize.DATE
    },
    endDeliveryDate: {
      type: Sequelize.DATE
    }
  },{
    timestamps: false,    
  }
  );
  return Equiment;
};
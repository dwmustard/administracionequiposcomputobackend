module.exports = (sequelize, Sequelize) => {
  const OnlineUser = sequelize.define("onlineUser", {
    userId: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING
    }
  },{
    // don't forget to enable timestamps!
    timestamps: true,

    // I don't want createdAt
    createdAt: false,

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateDate'
  }
  );
  return OnlineUser;
};
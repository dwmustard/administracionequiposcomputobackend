module.exports = (sequelize, Sequelize) => {
  const UserLog = sequelize.define("userLog", {
    userId: {
      type: Sequelize.INTEGER
    },
    action: {
      type: Sequelize.STRING
    }
  },{
    // don't forget to enable timestamps!
    timestamps: true,

    // I don't want createdAt
    createdAt: 'date',

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: false
  }
  );
  return UserLog;
};
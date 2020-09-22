module.exports = (sequelize, Sequelize) => {
  const UserLog = sequelize.define("userLog", {
    username: {
      type: Sequelize.STRING
    },
    action: {
      type: Sequelize.STRING
    }
  },{
    timestamps: true,
    createdAt: 'date',
    updatedAt: false
  }
  );
  return UserLog;
};
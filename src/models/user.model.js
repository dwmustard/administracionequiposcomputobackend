module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING(16),
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true
      }
    },
    password: {
      type: Sequelize.STRING(16),
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z].*[\s\.]*$/
      }
    },
    role: {
      type: Sequelize.STRING(5),
      defaultValue: "User",
      validate: {
        isIn: [['User', 'Admin']]
      }
    }
  });
  return User;
};
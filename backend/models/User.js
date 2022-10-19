const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "email is required" },
    },
    unique: true,
  },
  hash: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "hash is required" },
    },
  },
});

module.exports = { User };

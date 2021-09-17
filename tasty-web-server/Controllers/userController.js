const userDb = require("../Models/userModel");

let users = {};

users.getfoodData = async () => {
  let data = await userDb.getFood();
  if (data) {
    return data;
  }
};

module.exports = users;

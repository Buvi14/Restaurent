const mongoose = require("mongoose");
const collection = require("../Utilities/connection");
let userDb = {};

userDb.getFood = async () => {
  let foodDb = await collection.getFoodCollection();
  let data = foodDb.find();
  if (data) {
    return data;
  } else {
    let err = new Error("Data Not Found");
    throw err;
  }
};

module.exports = userDb;

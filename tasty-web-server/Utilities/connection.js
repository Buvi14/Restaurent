const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/tasty-food";

// Schema for users;

const userschema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Required field"],
  },
  password: {
    type: String,
    required: [true, "Required field"],
  },
  phone: {
    type: Number,
    required: [true, "Required field"],
  },
  email: {
    type: String,
    required: [true, "Required field"],
  },
});

const foodschema = mongoose.Schema({
  title: {
    type: String,
  },
  img: {
    type: String,
  },
  feedback: [],
  price: { type: Number },
});

let collection = {};

// Connecting to mongoDB

collection.getuserCollection = async () => {
  try {
    return (
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("user", userschema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};

collection.getFoodCollection = async () => {
  try {
    return (
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("food", foodschema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};

module.exports = collection;

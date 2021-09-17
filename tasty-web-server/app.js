var express = require("express");
let router = require("./routes/router");
const bodyParser = require("body-parser");
const create = require("./Models/setupDb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usermodel = require("./Utilities/connection");
var cors = require("cors");

var app = express();

// view engine setup

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.get("/setupDb", async (req, res, next) => {
  try {
    let data = await create.setupDb();
    res.send(data);
  } catch (err) {
    res.send("Error occurred during insertion of data");
  }
});

// Register code starts here

app.post("/register", async (req, res) => {
  try {
    const { username, phone, email, password } = req.body;

    if (!(email && password && username && phone)) {
      res.status(400).send("All input is required");
    }
    let User = await Usermodel.getuserCollection();
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      phone,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const token = jwt.sign(
      { user_id: user._id, email },
      "process.env.TOKEN_KEY",
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Login code starts here
app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    let User = await Usermodel.getuserCollection();
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        "process.env.TOKEN_KEY",
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log("Running in :" + port);
});

app.use("/", router);

const express = require("express");
const users = require("../Controllers/userController");
const router = express.Router();

router.get("/food", (req, res) => {
  users
    .getfoodData()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

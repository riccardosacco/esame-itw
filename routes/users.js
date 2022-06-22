var express = require("express");
var router = express.Router();

const query = require("../config/db");

router.get("/", async (req, res) => {
  const users = await query("SELECT * FROM users");

  return res.send(users);
});

module.exports = router;

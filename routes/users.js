var express = require("express");
var router = express.Router();

const db = require("../config/db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).send({ error: "Error while fetching users" });
    }

    return res.send(results);
  });
});

module.exports = router;

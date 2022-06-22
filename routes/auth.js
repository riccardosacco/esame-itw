const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const md5 = require("md5");

const query = require("../config/db");
const auth = require("../middleware/auth");

router.get("/me", auth, async (req, res) => {
  const [user] = await query("SELECT * FROM users WHERE id = ?", req.user.id);

  delete user.password;

  return res.send(user);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const [user] = await query(
    "SELECT * FROM users WHERE username = ?",
    username
  );

  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }

  if (user.password !== md5(password)) {
    return res.status(401).send({ error: "Password incorrect" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, "secret");

  return res.send({
    token,
  });
});

router.post("/register", async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send({ error: "Password does not match" });
  }

  const result = await query(
    "INSERT INTO users (username,password) VALUES (?,?)",
    [username, md5(password)]
  );

  return res.send({
    id: result.insertId,
    username,
  });
});

module.exports = router;

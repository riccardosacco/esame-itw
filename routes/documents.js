const express = require("express");
const router = express.Router();

const query = require("../config/db");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const documents = await query(
    "SELECT * FROM documents WHERE owner = ?",
    req.user.id
  );

  return res.send(documents);
});

router.get("/:id", auth, async (req, res) => {
  const [document] = await query(
    "SELECT * FROM documents WHERE id = ? AND owner = ?",
    [req.params.id, req.user.id]
  );

  if (!document) {
    return res.status(404).send({ error: "Folder not found" });
  }

  return res.send(document);
});

router.put("/:id", auth, async (req, res) => {
  await query("UPDATE documents SET ? WHERE id = ? AND owner = ?", [
    { ...req.body },
    req.params.id,
    req.user.id,
  ]);

  const [document] = await query(
    "SELECT * FROM documents WHERE id = ? AND owner = ?",
    [req.params.id, req.user.id]
  );

  return res.send(document);
});

router.delete("/:id", auth, async (req, res) => {
  await query("DELETE FROM documents WHERE id = ? AND owner = ?", [
    req.params.id,
    req.user.id,
  ]);

  return res.send({});
});

module.exports = router;

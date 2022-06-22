const express = require("express");
const router = express.Router();

const query = require("../config/db");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const results = await query(
    "SELECT * FROM folders WHERE parent IS NULL AND owner = ?",
    req.user.id
  );

  const folders = [];

  for (const folder of results) {
    const subfolders = await query(
      "SELECT * FROM folders WHERE parent = ?",
      folder.id
    );

    folders.push({ ...folder, subfolders });
  }

  return res.send(folders);
});

router.get("/:id", auth, async (req, res) => {
  const folders = await query(
    "SELECT * FROM folders WHERE id = ? AND owner = ?",
    [req.params.id, req.user.id]
  );

  if (folders.length === 0) {
    return res.status(404).send({ error: "Folder not found" });
  }

  const folder = folders[0];

  const documents = await query(
    "SELECT * FROM documents WHERE parent = ?",
    folder.id
  );

  return res.send({ ...folder, documents });
});

module.exports = router;

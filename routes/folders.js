var express = require("express");
var router = express.Router();

const db = require("../config/db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM folders WHERE parent IS NULL", (err, results) => {
    if (err) {
      return res.status(500).send({ error: "Error while fetching folders" });
    }

    return res.send(results);
  });
});

router.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM folders WHERE ID = ?",
    req.params.id,
    (err, results) => {
      if (err) {
        return res.status(500).send({ error: "Error while fetching folder" });
      }

      if (results.length === 0) {
        return res.status(404).send({ error: "Folder not found" });
      }

      const folder = results[0];

      db.query(
        "SELECT * FROM documents WHERE parent = ?",
        folder.id,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .send({ error: "Error while fetching documents" });
          }

          return res.send({ ...folder, documents: results });
        }
      );
    }
  );
});

module.exports = router;

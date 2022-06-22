const express = require("express");
const path = require("path");

// Inizializzo express
const app = express();
const PORT = process.env.PORT || 3500;
app.use(express.json());

// Importo le routes
const documents = require("./routes/documents");
const folders = require("./routes/folders");
const users = require("./routes/users");
const auth = require("./routes/auth");

// Definisco le routes dell'api
app.use("/api/documents", documents);
app.use("/api/folders", folders);
app.use("/api/users", users);
app.use("/api/auth", auth);

// Default route api
app.get("/api/*", (req, res) => {
  res.status(404).send({ error: "API route not found" });
});

// Cartella assets statici
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

// Default route frontend
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Evita che node si chiuda su un errore
process.on("uncaughtException", (err) => {
  console.log("Caught exception: ", err);
});

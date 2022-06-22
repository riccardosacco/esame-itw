const mysql = require("mysql");
const util = require("util");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "esame_itw",
});

const query = util.promisify(conn.query).bind(conn);

module.exports = query;

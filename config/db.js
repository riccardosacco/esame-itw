const mysql = require("mysql2");
const util = require("util");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "alexlola",
  database: "esame_itw",
});

const query = util.promisify(conn.query).bind(conn);

module.exports = query;

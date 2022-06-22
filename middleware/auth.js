const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret");
    const user = decodedToken;

    req.user = user;

    next();
  } catch {
    res.status(401).json({
      error: "Authentication error",
    });
  }
};

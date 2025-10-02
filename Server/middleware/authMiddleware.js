const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body = {};
    req.body.userId = verifyToken.userId;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

module.exports = auth;

const { verifyToken } = require("./providers/jwt");
const { handleError, createError } = require("../utils/handleErrors");

const config = require("config");
const tokenGenerator = config.get("TOKEN_GENERATOR");

// Hexagonal Architecture
const authenticatedUser = (req, res, next) => {
  if (tokenGenerator === "jwt") {
    try {
      const tokenFromClient = req.header("x-auth-token");
      if (!tokenFromClient) {
        const error = new Error("Please Login");
        error.status = 401;
        return createError("Authentication", error);
      }
      const userInfo = verifyToken(tokenFromClient);
      if (!userInfo) {
        const error = new Error("Unauthorized user");
        error.status = 401;
        return createError("Authentication", error);
      }
      req.user = userInfo;
      return next();
    } catch (error) {
      return handleError(res, 401, error.message);
    }
  }
  return handleError(res, 500, "you did not used valid token generator");
};

module.exports = authenticatedUser;

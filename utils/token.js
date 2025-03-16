const jwt = require("jsonwebtoken");
const { secret } = require("../config/secret");

// Function to generate authentication token
exports.generateToken = (userInfo) => {
  const payload = {
    _id: userInfo._id,
    name: userInfo.name,
    email: userInfo.email,
    role: userInfo.role,
    iat: Math.floor(Date.now() / 1000), // Added issued-at timestamp for debugging
  };

  return jwt.sign(payload, secret.token_secret, { expiresIn: "2d" });
};

// Function to generate verification token (for email verification)
exports.tokenForVerify = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    iat: Math.floor(Date.now() / 1000), // Added issued-at timestamp
  };

  return jwt.sign(payload, secret.jwt_secret_for_verify, { expiresIn: "1h" });
};

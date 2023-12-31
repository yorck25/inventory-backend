const jwt = require('jsonwebtoken');

class JWTDecoder {
  constructor() {}

  decodeJWT(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
      return decoded;
    } catch (error) {
      console.error('Error decoding JWT:', error.message);
      return null;
    }
  }
}

module.exports = JWTDecoder;
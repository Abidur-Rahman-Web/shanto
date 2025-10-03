import { JWT_EXPIRATION_TIME, JWT_SECRET } from "../config/config.js";
import jwt from "jsonwebtoken";
/**
 * Generates a JSON Web Token (JWT) containing the user's email and user_id
 * as payload. The token is signed with the JWT_SECRET and has an expiration
 * time set to JWT_EXPIRATION_TIME.
 *
 * @param {string} email - The user's email
 * @param {string} user_id - The user's MongoDB ObjectId
 * @returns {string} The generated JWT
 */
export const EncodedToken = (email, user_id) => {
  let KEY = JWT_SECRET;
  let EXPIRE = {
    expiresIn: JWT_EXPIRATION_TIME,
  };
  let PAYLOAD = {
    email,
    user_id,
  };
  let token = jwt.sign(PAYLOAD, KEY, EXPIRE);
  return token;
  console.log(token);
};

// let email = "dummy@example.com";
// let user_id = "98765";
// console.log(EncodedToken(email, user_id));
export const DeocodeToken = (token) => {
  try {
    let KEY = JWT_SECRET;
    let decoded = jwt.verify(token, KEY);
    return decoded;
  } catch (error) {
    console.log(error);
  }
};

import { DeocodeToken } from "../utility/tokenUtils.js";
export const authMiddleware = (req, res, next) => {
  let token = req.headers["token"];
  if (!token) {
    return res.status(401).json({ status: "error", message: "shanto" });
  }
  let decode = DeocodeToken(token);
  if (decode == null) {
    return res.status(401).json({ status: "error", message: "Unauthorized" });
  } else {
    let email = decode.email;
    let user_id = decode.user_id;
    req.headers["email"] = email;
    req.headers["user_id"] = user_id;
  }
  // Your authentication logic here
  console.log("i am middleware");
  next();
};

import jwt from "jsonwebtoken";
import unauthorized from "../errors/unauthorized.js";
const authtencationJWT = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer")) {
    throw new unauthorized("No token send");
  }
  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.secret_KEY);
    const { id, userName } = decoded;
    req.userName = { id, userName };
    next();
  } catch {
    throw new unauthorized("invalid token send");
  }
};

export default authtencationJWT;

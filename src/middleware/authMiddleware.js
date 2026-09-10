const jwt = require("jsonwebtoken");
const authenticate = (req,res,next) => {
  const h=req.headers.authorization;
  if(!h || !h.startsWith("Bearer ")) return res.status(401).json({status:401,message:"Missing or invalid Authorization header"});
  try { req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET); next(); }
  catch(e){ return res.status(401).json({status:401,message:"Invalid or expired token"}); }
};
module.exports={authenticate};

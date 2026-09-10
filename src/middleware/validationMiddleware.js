const requireFields = (...fields) => (req,res,next) => {
  const missing=fields.filter(f => req.body?.[f] === undefined || req.body?.[f] === null || req.body?.[f] === "");
  if(missing.length) return res.status(400).json({isSuccess:false,errorMessege:`Missing required field(s): ${missing.join(", ")}`,exceptionDetail:null,dataBundle:null,errorShow:true,errorCode:400});
  next();
};
module.exports={requireFields};

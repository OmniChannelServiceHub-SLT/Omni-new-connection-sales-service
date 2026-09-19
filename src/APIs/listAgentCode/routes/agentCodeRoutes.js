const router=require("express").Router();
const {listAgentCodeHandler}=require("../controllers/agentCodeController");
router.get("/",listAgentCodeHandler);
module.exports=router;

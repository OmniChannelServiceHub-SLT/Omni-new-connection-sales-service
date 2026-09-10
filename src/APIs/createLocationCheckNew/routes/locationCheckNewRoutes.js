const router=require("express").Router();
const {createLocationCheckNewHandler}=require("../controllers/locationCheckNewController");
router.post("/",createLocationCheckNewHandler);
module.exports=router;

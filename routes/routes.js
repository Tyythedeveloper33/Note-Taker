const router = require("express").Router();
const path =  require('path');
 
router.get("/notes", (req,res)=> {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
    console.log("goes through index");
 
});
module.exports = router ;
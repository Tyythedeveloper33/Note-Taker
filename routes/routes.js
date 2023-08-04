// const express = require('express');
// const app = express();
// This line below is the same as BOTH of the above lines of code
const router = require("express").Router(); // THIS IS OUR APP REFERENCE

const path =  require('path');
const apiRoutes = require("./apiRoutes")

router.use('/api', apiRoutes)

// serve the landing page (index.html) when accessing http://localhost:3001
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/notes", (req,res)=> {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
    console.log("goes through index");
});

module.exports = router;
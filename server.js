const express = require('express');
const htmlRoutes = require("./routes/routes")
const apiRoutes = require("./routes/apiRoutes.js")
const PORT =  process.env.PORT || 3000;

const app = express();
 app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/', htmlRoutes)

// serve the landing page (index.html) when accessing http://localhost:3001
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);
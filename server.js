const express = require('express');
const htmlRoutes = require("./routes/routes")

const PORT =  process.env.PORT || 3000;

const app = express();
// app.use -->  is configuration middleware
 app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/', htmlRoutes)   // --> this REDIRECTS the incoming request to the ROUTES of our app

// serve the landing page (index.html) when accessing http://localhost:3001
/* --> moved into /routes/routes.js file 
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
*/
  
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);
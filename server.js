//Install express server
const express = require('express');
const path = require('path');

const app = express();


// Serve only the static files form the dist directory
app.use(express.static('./dist/clon-de-hablalo'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/clon-de-hablalo/index.html'));
});

// Start the app by listening on the default Heroku port
const HttpServer = app.listen(process.env.PORT || 8080, () => {
  console.log("El servidor esta corriendo en: http://localhost:" + HttpServer.address().port);
});

//const httpServer = app.listen(9000, () => {
//  console.log("El servidor esta corriendo en: " + httpServer.address().port);
//});
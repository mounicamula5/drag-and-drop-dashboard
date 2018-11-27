const express = require('express');
const app = express();
 
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
 
app.set('views', __dirname + '/dist'); //
 
// For all GET requests, send back index.html
app.get('/', function(request, response) {
  response.render('index'); // this index is from /dist/index
});
 
const port = process.env.PORT || 4200;
app.set('port', port);
 

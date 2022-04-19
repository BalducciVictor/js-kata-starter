const express = require('express'); 

const port = 8000;

var app = express();

app.get('/', function(req, res) {
  res.sendFile('./templates/index.html', {root: __dirname })
});

// Démarre le serveur à l'adresse 127.0.0.1 sur le port 8000
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
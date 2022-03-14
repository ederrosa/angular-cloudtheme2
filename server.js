const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8082;

app.use(express.static(__dirname + '/dist/cloudtheme2'));

app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname + '/dist/cloudtheme2/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


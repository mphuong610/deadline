"use strict";

const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine',"ejs");
app.set('views','./views');
const port = 3000;

require('./routes')(app);

app.listen(port, function(err) {
  if(err) {
    console.error('Something error !!');
    console.error(err);
  }

  console.log('App listen on port ' + port);
});
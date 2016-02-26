var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('Running on PORT: ' + port);
})

spotRouter = require('./Routes/spotRoutes')();

app.use('/api', spotRouter);

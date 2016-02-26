var express = require('express');

var routes = function(){
  var spotRouter = express.Router();

  spotRouter.route('/Spots')
    .get(function(req, res){
      res.json({name: 'Starbucks'})
    })
    return spotRouter;
}

module.exports = routes;

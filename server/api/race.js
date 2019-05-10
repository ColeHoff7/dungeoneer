var express = require('express');
var app = module.exports = express();
import Race from '../models/race';
//var cors = require('cors');
//app.use(cors);

// Getting all races in DB
app.get('/race', function(req, res){
    Race.find((err, results) => {
      if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: results });
      });
});

// Getting race by id
app.get('/race/:id([0-9]+)', function(req, res){
    res.json({message: `getting race by id ${req.param("id")}`});
});

// Getting race by name
app.get('/race/:name([A-Za-z]+)', function(req, res){
    res.json({message: `getting race by name ${req.param("name")}`});
});

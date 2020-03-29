var express = require('express');
var app = module.exports = express();
import Class from '../models/class-model'

// Getting all classes
app.get('/class', function(req, res){
    Class.find((err, results) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(results);
      });
});

// Getting class by id
app.get('/class/:id([0-9]+)', function(req, res){
    res.json({message: `getting class by id ${req.param("id")}`});
});

// Getting class by name
app.get('/class/:name([A-Za-z]+)', function(req, res){
    res.json({message: `getting class by name ${req.param("name")}`});
});

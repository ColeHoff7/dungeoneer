var express = require('express');
var app = module.exports = express();
import Class from '../models/class-model'

// Getting all classes
app.get('/class', function(req, res){
    console.log("GET /class")
    Class.find((err, results) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: results });
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
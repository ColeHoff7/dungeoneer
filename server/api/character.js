var express = require('express');
var app = module.exports = express();

// Getting character by id
app.get('/character/:id([0-9]+)', function(req, res){
    res.json({message: `getting character by id ${req.param("id")}`});
});

// Getting character by userid
app.get('/character/:id([0-9]+)', function(req, res){
    res.json({message: `getting character by userid ${req.param("id")}`});
});

// Posting a new character
app.post('/character', function(req, res){
    res.json({message: 'posting a new character'});
});

// Updating a character
app.put('/character/:id/:trait', function(req, res){
    res.json({message: `updating a character's ${req.param("trait")} with id ${req.param("id")}`});
})


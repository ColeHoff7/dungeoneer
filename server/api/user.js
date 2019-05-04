var express = require('express');
var app = module.exports = express();

// Getting user by id
app.get('/user/:id([0-9]+)', function(req, res){
    res.json({message: `getting user by id ${req.param("id")}`});
});

// Getting user by userid
app.get('/user/:email(w+)', function(req, res){
    res.json({message: `getting user by email ${req.param("email")}`});
});

// Posting a new user
app.post('/user', function(req, res){
    res.json({message: 'posting a new user'});
});

// Updating a user
app.put('/user/:id/:thing', function(req, res){
    res.json({message: `updating a user's ${req.param("thing")} with id ${req.param("id")}`});
})


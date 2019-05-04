var express = require('express');
var app = module.exports = express();
//var cors = require('cors');
//app.use(cors);
// Getting all races in DB
app.get('/race', function(req, res){
    res.json({races: [
        {
            id: 1,
            name: 'dragonborn'
        },
        {
            id: 2,
            name: 'dwarf'
        },
        {
            id: 3,
            name: 'half-orc'
        },
        {
            id: 4,
            name: 'human'
        }
    ]});
});

// Getting race by id
app.get('/race/:id([0-9]+)', function(req, res){
    res.json({message: `getting race by id ${req.param("id")}`});
});

// Getting race by name
app.get('/race/:name([A-Za-z]+)', function(req, res){
    res.json({message: `getting race by name ${req.param("name")}`});
});
var express = require('express');
var app = module.exports = express();
import Race from '../models/race-model';

// find all races
app.get('/race', (req, res) => {
  console.log('GET /race');

  Race.find((err, results) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: results });
  });
});

// find race by id
app.get('/race/:id', (req, res) => {
  console.log('GET /race/:id');

  const id = req.params.id;
  console.log('id: ', id);

  Race.findById(id, (err, result) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: result });
  });
});

// find race by name
app.get('/race/name/:name([A-Za-z]+)', function(req, res){
  console.log('GET /race/name/:name');

  const name = req.params.name;
  console.log('name: ', name);

  Race.find({ name: name }, (err, result) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: result });
  });
});

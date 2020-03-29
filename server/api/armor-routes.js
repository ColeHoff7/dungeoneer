var express = require('express');
var app = module.exports = express();
import Armor from '../models/armor-model';

// find all armor
app.get('/armor', (req, res) => {
  Armor.find((err, results) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(results);
  });
});

// find armor by id
app.get('/armor/:id', (req, res) => {
  const id = req.params.id;

  Armor.findById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
});

var express = require('express');
var app = module.exports = express();
import Spell from '../models/spell-model';

// find all spells
app.get('/spell', (req, res) => {
  Spell.find((err, results) => {
    if (err) return res.status(500).send(err);
    return res.send(200).send(results);
  });
});

// find spell by id
app.get('/spell/:id', (req, res) => {
  const id = req.params.id;

  Spell.findById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.send(200).send(result);
  });
});

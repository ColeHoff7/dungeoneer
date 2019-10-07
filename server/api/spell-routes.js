var express = require('express');
var app = module.exports = express();
import Spell from '../models/spell-model';

// find all spells
app.get('/spell', (req, res) => {
  console.log('GET /spell');

  Spell.find((err, results) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: results });
  });
});

// find spell by id
app.get('/spell/:id', (req, res) => {
  console.log('GET /spell/:id');

  const id = req.params.id;
  console.log('id: ', id);

  Spell.findById(id, (err, result) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: result });
  });
});

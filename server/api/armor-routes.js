var express = require('express');
var app = module.exports = express();
import Armor from '../models/armor-model';

// find all armor
app.get('/armor', (req, res) => {
  console.log('GET /armor');

  Armor.find((err, results) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: results });
  });
});

// find armor by id
app.get('/armor/:id', (req, res) => {
  console.log('GET /armor/:id');

  const id = req.params.id;
  console.log('id: ', id);

  Armor.findById(id, (err, result) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: result });
  });
});

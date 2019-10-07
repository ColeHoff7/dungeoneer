var express = require('express');
var app = module.exports = express();
import Weapon from '../models/weapon-model';

// find all weapons
app.get('/weapon', (req, res) => {
  console.log('GET /weapon');

  Weapon.find((err, results) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: results });
  });
});

// find weapon by id
app.get('/weapon/:id', (req, res) => {
  console.log('GET /weapon/:id');

  const id = req.params.id;
  console.log('id: ', id);

  Weapon.findById(id, (err, result) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: result });
  });
});

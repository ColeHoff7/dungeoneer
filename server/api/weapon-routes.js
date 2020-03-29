var express = require('express');
var app = module.exports = express();
import Weapon from '../models/weapon-model';

// find all weapons
app.get('/weapon', (req, res) => {
  Weapon.find((err, results) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(results);
  });
});

// find weapon by id
app.get('/weapon/:id', (req, res) => {
  const id = req.params.id;

  Weapon.findById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.send(200).send(result);
  });
});

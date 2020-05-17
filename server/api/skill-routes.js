var express = require('express');
var app = module.exports = express();
import Skill from '../models/skill-model';

// find all items
app.get('/skill', (req, res) => {
  Skill.find((err, results) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(results);
  });
});

app.get('/skill/:id', (req, res) => {
  const id = req.params.id;

  Skill.findById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
});

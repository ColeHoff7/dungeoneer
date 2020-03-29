var express = require('express');
var app = module.exports = express();
import Item from '../models/item-model';

// find all items
app.get('/item', (req, res) => {
  Item.find((err, results) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(results);
  });
});

app.get('/item/:id', (req, res) => {
  const id = req.params.id;

  Item.findById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
});

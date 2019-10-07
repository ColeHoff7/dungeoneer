var express = require('express');
var app = module.exports = express();
import Item from '../models/item-model';

// find all items
app.get('/item', (req, res) => {
  console.log('GET /item');

  Item.find((err, results) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: results });
  });
});

app.get('/item/:id', (req, res) => {
  console.log('GET /item/:id');

  const id = req.params.id;
  console.log('id: ', id);

  Item.findById(id, (err, result) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: result });
  });
});

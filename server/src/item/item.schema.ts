const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
  id: String,
  name: String,
  cost: String,
  speed: String,
  weight: String,
  capacity: String,
  category: String,
});

ItemSchema.set('collection', 'items');

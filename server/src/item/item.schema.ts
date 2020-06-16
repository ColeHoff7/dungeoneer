const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
  id: String,
  name: String,
  cost: String,
  speed: Number,
  weight: Number,
  capacity: Number,
  tool_type: String,
  category: String
});

ItemSchema.set('collection', 'items');

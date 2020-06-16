const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const ArmorSchema = new Schema({
  id: String,
  name: String,
  cost: String,
  armor_class: Number,
  class_modifier: String,
  min_strength: Number,
  stealth_disadvantage: Boolean,
  weight: Number,
  category: String,
  don: Number,
  doff: Number
});

ArmorSchema.set('collection', 'armor');

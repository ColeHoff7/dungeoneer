const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const WeaponSchema = new Schema({
  id: String,
  name: String,
  cost: String,
  damage: String,
  damage_type: String,
  weight: Number,
  weight_category: String,
  two_handed: Boolean,
  is_thrown: Boolean,
  ammunition_required: Boolean,
  min_range: Number,
  max_range: Number,
  loading_required: Boolean,
  is_finesse: Boolean,
  versatile: String,
  is_special: Boolean,
  reach_required: Boolean,
  category: String
});

WeaponSchema.set('collection', 'weapons');

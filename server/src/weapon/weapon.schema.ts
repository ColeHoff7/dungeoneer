const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const WeaponSchema = new Schema({
  id: String,
  name: String,
  cost: String,
  damage: String,
  weight: String,
  properties: String,
  class: String,
});

WeaponSchema.set('collection', 'weapons');

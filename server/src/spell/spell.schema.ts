const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const SpellSchema = new Schema({
  id: String,
  name: String,
  school: String,
  casting_time: String,
  saving_throw: String,
  ritual: String,
  concentration: String,
  level: String,
  description: String,
  classes: String
});

SpellSchema.set('collection', 'spells');

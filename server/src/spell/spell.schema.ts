const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const SpellSchema = new Schema({
  id: String,
  name: String,
  school: String,
  casting_time: String,
  saving_throw: String,
  ritual_required: Boolean,
  concentration_required: Boolean,
  level: Number,
});

SpellSchema.set('collection', 'spells');

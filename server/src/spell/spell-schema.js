import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
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

export default mongoose.model('Spell', SpellSchema);

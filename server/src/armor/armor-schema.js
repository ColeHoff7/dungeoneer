import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArmorSchema = new Schema({
  id: String,
  name: String,
  cost: String,
  armor_class: String,
  min_strength: String,
  stealth: String,
  weight: String,
  class: String,
  don: String,
  doff: String
});

ArmorSchema.set('collection', 'armor');

export default mongoose.model('Armor', ArmorSchema);

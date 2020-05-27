import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
  id: String,
  name: String,
  cost: String,
  damage: String,
  weight: String,
  properties: String,
  class: String
});

WeaponSchema.set('collection', 'weapons');

export default mongoose.model('Weapon', WeaponSchema);

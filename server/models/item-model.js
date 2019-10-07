import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  id: String,
  name: String,
  cost: String,
  speed: String,
  weight: String,
  capacity: String,
  category: String
});

ItemSchema.set('collection', 'items');

export default mongoose.model('Item', ItemSchema);

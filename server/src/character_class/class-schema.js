import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    id: String,
    name: String,
    description: String,
    hit_dice: String,
    hit_points: String,
    proficiencies: Object,
    equipment: Object,
    levels: Object
}, { timestamps: true});

ClassSchema.set('collection', 'classes');

export default mongoose.model('Class', ClassSchema);

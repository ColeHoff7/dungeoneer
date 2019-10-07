import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RaceSchema = new Schema({
    id: String,
    name: String,
    description: String,
    common_names: Object,
    traits: Object,
    ability_changes: Object,
    languages: String
}, { timestamps: true});

RaceSchema.set('collection', 'races');

export default mongoose.model('Race', RaceSchema);

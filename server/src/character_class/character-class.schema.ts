const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const CharacterClassSchema = new Schema({
    id: String,
    name: String,
    description: String,
    hit_dice: String,
    hit_points: String,
    proficiencies: Object,
    equipment: Object,
    levels: Object
}, { timestamps: true});

CharacterClassSchema.set('collection', 'character_classes');
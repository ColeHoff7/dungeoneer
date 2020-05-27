const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const RaceSchema = new Schema({
    id: {type: String},
    name: {type: String},
    color: {type: String},
    description: {type: String},
    common_names: {type: Object},
    traits: {type: Object},
    ability_changes: {type: Object},
    languages: {type: String}
}, { timestamps: true});

RaceSchema.set('collection', 'races');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasicInfo = new Schema({
    name: String,
    age: Number,
    alignment: String
});

const PhysicalFeatures = new Schema({
    height: Number,
    weight: Number,
    eyes: String,
    skin: String,
    hair: String
});

const BackgroundInfo = new Schema({
    backstory: String,
    traits: String,
    ideals: String,
    bonds: String,
    flaws: String
});

const Stats = new Schema({
    max_hp: Number,
    armor_class: Number,
    initiative: Number,
    speed: Number
});

export const CharacterSchema = new Schema({
    id: String,
    user_id: String,
    basic_info: BasicInfo,
    physical_features: PhysicalFeatures,
    background_info: BackgroundInfo,
    level: Number,
    stats: Stats,
    race: String,
    character_class: String,
    ability_scores: Array,
    skills: Array,
    armor: Array,
    items: Array,
    spells: Array,
    weapons: Array
});

CharacterSchema.set('collection', 'characters');
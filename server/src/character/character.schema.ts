const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const CharacterSchema = new Schema({
    id: String,
    user_id: String,
    basic_info: {
        name: String,
        age: Number,
        alignment: String
    },
    physical_features: {
        height: Number,
        weight: Number,
        eyes: String,
        skin: String,
        hair: String
    },
    background_info: {
        backstory: String,
        traits: String,
        ideals: String,
        bonds: String,
        flaws: String
    },
    level: Number,
    stats: {
        max_hp: Number,
        armor_class: Number,
        initiative: Number,
        speed: Number
    },
    race: String,
    character_class: String,
    ability_scores: Array,
    skills: Array,
    armor: Array,
    items: Array,
    spells: Array,
    weapons: Array
});

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

CharacterSchema.set('collection', 'characters');
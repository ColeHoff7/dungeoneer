const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AbilityChanges = new Schema(
  {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number
  }
);

export const RaceSchema = new Schema(
  {
    id: String,
    name: String,
    description: String,
    adult_age: Number,
    average_max_age: Number,
    alignment: String,
    average_height: String,
    average_weight: String,
    size: String,
    walking_speed: Number,
    darkvision: Boolean,
    special_traits: Array,
    ability_changes: AbilityChanges,
    languages: Array,
    extra: String
  }
);

RaceSchema.set('collection', 'races');

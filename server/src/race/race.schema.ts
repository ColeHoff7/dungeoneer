const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const RaceSchema = new Schema(
  {
    id: String,
    name: String,
    color: String,
    description: String,
    common_names: Object,
    traits: Object,
    ability_changes: Object,
    languages: String,
  },
  { timestamps: true }
);

RaceSchema.set('collection', 'races');

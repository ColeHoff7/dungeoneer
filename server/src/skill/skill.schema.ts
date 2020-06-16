const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const SkillSchema = new Schema({
  id: String,
  key: String,
  name: String,
});

SkillSchema.set('collection', 'skills');

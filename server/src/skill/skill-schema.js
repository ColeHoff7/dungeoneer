import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    id: String,
    key: String,
    name: String
});

SkillSchema.set('collection', 'skills');

export default mongoose.model('Skill', SkillSchema);

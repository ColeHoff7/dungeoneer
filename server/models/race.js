import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RacesSchema = new Schema({
    id: String,
    name: String
}, { timestamps: true});

export default mongoose.model('Race', RacesSchema);
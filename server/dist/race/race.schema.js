"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaceSchema = void 0;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.RaceSchema = new Schema({
    id: { type: String },
    name: { type: String },
    color: { type: String },
    description: { type: String },
    common_names: { type: Object },
    traits: { type: Object },
    ability_changes: { type: Object },
    languages: { type: String }
}, { timestamps: true });
exports.RaceSchema.set('collection', 'races');
//# sourceMappingURL=race.schema.js.map
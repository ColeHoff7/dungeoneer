import { Document } from 'mongoose';
export interface Race extends Document {
    id: string;
    name: string;
    color: string;
    description: string;
    common_names: object;
    traits: object;
    ability_changes: object;
    languages: string;
}

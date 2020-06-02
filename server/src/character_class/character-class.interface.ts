import { Document } from 'mongoose';

export interface CharacterClass extends Document{
    id: string,
    name: string,
    description: string,
    hit_dice: string,
    hit_points: string,
    proficiencies: object,
    equipment: object,
    levels: object
}
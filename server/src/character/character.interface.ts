import { Document } from 'mongoose';

export interface Character extends Document{
    id: string;
    user_id: string;
    basic_info: BasicInfo;
    physical_features: PhysicalFeatures;
    background_info: BackgroundInfo;
    level: number;
    stats: Stats;
    race: string;
    character_class: string;
    ability_scores: Array<number>;
    skills: Array<string>;
    armor: Array<string>;
    items: Array<string>;
    spells: Array<string>;
    weapons: Array<string>;
}

interface BasicInfo extends Document {
    name: string;
    age: number;
    alignment: string;
}

interface PhysicalFeatures extends Document {
    height: number;
    weight: number;
    eyes: string;
    skin: string;
    hair: string;
}

interface BackgroundInfo extends Document {
    backstory: string;
    traits: string;
    ideals: string;
    bonds: string;
    flaws: string;
}

interface Stats extends Document {
    max_hp: number;
    armor_class: number;
    initiative: number;
    speed: number;
}
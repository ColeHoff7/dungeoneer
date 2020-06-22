import { Document } from 'mongoose';

export interface Race extends Document {
  id: string;
  name: string;
  description: string;
  adult_age: number;
  average_max_age: number;
  alignment: string;
  average_height: string;
  average_weight: string;
  size: string;
  walking_speed: number;
  darkvision: boolean;
  special_traits: Array<SpecialTrait>;
  ability_changes: AbilityChanges;
  languages: Array<string>;
  extra: string;
}

interface SpecialTrait extends Document {
  name: string;
  description: string;
  proficiencies: Array<string>;
}

interface AbilityChanges extends Document {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

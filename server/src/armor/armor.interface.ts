import { Document } from 'mongoose';

export interface Armor extends Document {
  id: string;
  name: string;
  cost: string;
  armor_class: number;
  class_modifier: string;
  min_strength: number;
  stealth_disadvantage: boolean;
  weight: number;
  category: string;
  don: number;
  doff: number;
}

import { Document } from 'mongoose';

export interface Weapon extends Document {
  id: string;
  name: string;
  cost: string;
  damage: string;
  damage_type: string;
  weight: number;
  weight_category: string;
  two_handed: boolean;
  is_thrown: boolean;
  ammunition_required: boolean;
  min_range: number;
  max_range: number;
  loading_required: boolean;
  is_finesse: boolean;
  versatile: string;
  is_special: boolean;
  reach_required: boolean;
  category: string;
}

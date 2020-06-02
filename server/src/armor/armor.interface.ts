import { Document } from 'mongoose';

export interface Armor extends Document{
  id: string;
  name: string;
  cost: string;
  armor_class: string;
  min_strength: string;
  stealth: string;
  weight: string;
  class: string;
  don: string;
  doff: string;
}

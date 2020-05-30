import { Document } from 'mongoose';

export interface Weapon extends Document{
  id: string;
  name: string;
  cost: string;
  damage: string;
  weight: string;
  properties: string;
  class: string;
}

import { Document } from 'mongoose';

export interface Item extends Document {
  id: string;
  name: string;
  cost: string;
  speed: string;
  weight: string;
  capacity: string;
  category: string;
}

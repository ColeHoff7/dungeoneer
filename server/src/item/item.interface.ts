import { Document } from 'mongoose';

export interface Item extends Document {
  id: string;
  name: string;
  cost: string;
  speed: number;
  weight: number;
  capacity: number;
  tool_type: string;
  category: string;
}

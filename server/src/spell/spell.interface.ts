import { Document } from 'mongoose';

export interface Spell extends Document{
  id: string;
  name: string;
  school: string;
  casting_time: string;
  saving_throw: string;
  ritual_required: boolean;
  concentration_required: string;
  level: number;
}

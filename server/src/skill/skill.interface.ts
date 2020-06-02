import { Document } from 'mongoose';

export interface Skill extends Document{
    id: string,
    key: string,
    name: string
}
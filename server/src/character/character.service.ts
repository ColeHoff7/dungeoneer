import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character } from './character.interface';

@Injectable()
export class CharacterService {
    constructor(@InjectModel('CharacterModel') private characterModel: Model<Character>) {}

    async get(): Promise<Character[]> {
        return this.characterModel.find().exec();
    }

    async getById(id: string): Promise<Character> {
        return this.characterModel.findById(id).exec();
    }

    async getByUser(userId: string): Promise<Character[]> {
        return this.characterModel.find({ user_id: userId }).exec();
    }

    async save(character: Character): Promise<Character> {
        const newCharacter = new this.characterModel(character);
        return newCharacter.save();
    }

    async deleteById(id: string): Promise<Character> {
        return this.characterModel.findByIdAndDelete(id);
    }
}
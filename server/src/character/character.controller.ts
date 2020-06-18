import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.interface';
import { identity } from 'rxjs';

@Controller('character')
export class CharacterController {
    constructor(private readonly characterService: CharacterService) {}

    /*
    * Get all characters
    */
    @Get()
    async get(): Promise<Character[]> {
        return this.characterService.get();
    }

    /*
    * Get character by id
    */
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Character> {
        return this.characterService.getById(id);
    }

    /*
    * Get character by user
    */
    @Get('/user/:userId')
    async getByUser(@Param('userId') id: string): Promise<Character[]> {
        return this.characterService.getByUser(id);
    }

    /*
    * Add new character
    */
    @Post()
    async save(@Body() character: Character): Promise<Character> {
        return this.characterService.save(character);
    }

    /*
    * Delete a character by id
    */
    @Delete(':id')
    async deleteById(@Param('id') id: string): Promise<Character> {
        return this.characterService.deleteById(id);
    }
}
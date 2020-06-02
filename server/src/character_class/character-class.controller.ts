import { Controller, Get, Param } from '@nestjs/common';
import { CharacterClassService } from './character-class.service';
import { CharacterClass } from './character-class.interface';

@Controller('characterClass')
export class CharacterClassController {
  constructor(private readonly characterClassService: CharacterClassService) {}

  /*
   * Get all characterClasses
   */
  @Get()
  async get(): Promise<CharacterClass[]> {
    return this.characterClassService.get();
  }

  /*
   * Get characterClass by name
   */
  @Get(':name([A-Za-z]+)')
  async getByName(@Param('name') name: string): Promise<CharacterClass[]> {
    return this.characterClassService.getByName(name);
  }

  /*
   * Get characterClass by id
   */
  @Get(':id')
  async getById(@Param('id') id: string): Promise<CharacterClass> {
    return this.characterClassService.getById(id);
  }
}

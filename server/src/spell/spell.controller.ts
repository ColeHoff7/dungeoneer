import { Controller, Get, Param } from '@nestjs/common';
import { SpellService } from './spell.service';
import { Spell } from './spell.interface';

@Controller('spell')
export class SpellController {
  constructor(private readonly spellService: SpellService) {}

  /*
  * Get all spells
  */
  @Get()
  async get(): Promise<Spell[]> {
    return this.spellService.get();
  }

  /*
  * Get spell by name
  */
  @Get(':name([A-Za-z]+)')
  async getByName(@Param('name') name: string): Promise<Spell[]> {
    return this.spellService.getByName(name);
  }

  /*
  * Get spell by id
  */
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Spell> {
    return this.spellService.getById(id);
  }
}

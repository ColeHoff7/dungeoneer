import { Controller, Get, Param } from '@nestjs/common';
import { ArmorService } from './armor.service';
import { Armor } from './armor.interface';

@Controller('armor')
export class ArmorController {
  constructor(private readonly armorService: ArmorService) {}

  /*
  * Get all armor
  */
  @Get()
  async get(): Promise<Armor[]> {
    return this.armorService.get();
  }

  /*
  * Get armor by name
  */
  @Get(':name([A-Za-z]+)')
  async getByName(@Param('name') name: string): Promise<Armor[]> {
    return this.armorService.getByName(name);
  }

  /*
  * Get armor by id
  */
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Armor> {
    return this.armorService.getById(id);
  }

  /*
  * Get armor by armor class
  */
 @Get('/class/:armorClass[A-Za-z]+')
 async getByArmorClass(@Param('armorClass') armorClass: string): Promise<Armor[]> {
   return this.armorService.getByArmorClass(armorClass);
 }
}

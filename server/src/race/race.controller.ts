import { Controller, Get, Param } from '@nestjs/common';
import { RaceService } from './race.service';
import { Race } from './race.interface';

@Controller('race')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  /*
   * Get all races
   */
  @Get()
  async get(): Promise<Race[]> {
    return this.raceService.get();
  }

  /*
   * Get race by name
   */
  @Get(':name([A-Za-z]+)')
  async getByName(@Param('name') name: string): Promise<Race[]> {
    return this.raceService.getByName(name);
  }

  /*
   * Get race by id
   */
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Race> {
    return this.raceService.getById(id);
  }
}

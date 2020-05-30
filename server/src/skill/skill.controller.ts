import { Controller, Get, Param } from '@nestjs/common';
import { SkillService } from './skill.service';
import { Skill } from './skill.interface';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  /*
   * Get all skills
   */
  @Get()
  async get(): Promise<Skill[]> {
    return this.skillService.get();
  }

  /*
   * Get skill by name
   */
  @Get(':name([A-Za-z]+)')
  async getByName(@Param('name') name: string): Promise<Skill[]> {
    return this.skillService.getByName(name);
  }

  /*
   * Get skill by id
   */
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Skill> {
    return this.skillService.getById(id);
  }
}

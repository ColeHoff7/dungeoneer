import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { SkillSchema } from './skill.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'SkillModel', schema: SkillSchema }])],
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}

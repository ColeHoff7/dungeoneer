import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceModule } from './race/race.module';
import { CharacterClassModule } from './character_class/character-class.module';
import { SkillModule } from './skill/skill.module';
import { getSecret } from './secrets';

@Module({
  imports: [MongooseModule.forRoot(getSecret('dbUri'), {useNewUrlParser: true}), RaceModule, CharacterClassModule, SkillModule],
})
export class AppModule {}

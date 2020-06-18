import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArmorModule } from './armor/armor.module';
import { CharacterModule } from './character/character.module';
import { CharacterClassModule } from './character_class/character-class.module';
import { ItemModule } from './item/item.module';
import { RaceModule } from './race/race.module';
import { SkillModule } from './skill/skill.module';
import { SpellModule } from './spell/spell.module';
import { WeaponModule } from './weapon/weapon.module';
import { getSecret } from './secrets';

@Module({
  imports: [
    MongooseModule.forRoot(getSecret('dbUri'),
    {useNewUrlParser: true}),
    ArmorModule,
    CharacterModule,
    CharacterClassModule,
    ItemModule,
    RaceModule,
    SkillModule,
    SpellModule,
    WeaponModule
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterClassController } from './character-class.controller';
import { CharacterClassService } from './character-class.service';
import { CharacterClassSchema } from './character-class.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CharacterClassModel', schema: CharacterClassSchema },
    ]),
  ],
  controllers: [CharacterClassController],
  providers: [CharacterClassService],
})
export class CharacterClassModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { CharacterSchema } from './character.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'CharacterModel', schema: CharacterSchema }])],
    controllers: [CharacterController],
    providers: [CharacterService],
})
export class CharacterModule {}
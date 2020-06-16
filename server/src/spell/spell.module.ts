import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpellController } from './spell.controller';
import { SpellService } from './spell.service';
import { SpellSchema } from './spell.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SpellModel', schema: SpellSchema }]),
  ],
  controllers: [SpellController],
  providers: [SpellService],
})
export class SpellModule {}

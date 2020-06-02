import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArmorController } from './armor.controller';
import { ArmorService } from './armor.service';
import { ArmorSchema } from './armor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ArmorModel', schema: ArmorSchema }])],
  controllers: [ArmorController],
  providers: [ArmorService],
})
export class ArmorModule {}

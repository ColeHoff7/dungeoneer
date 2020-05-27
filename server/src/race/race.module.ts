import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceController } from './race.controller';
import { RaceService } from './race.service';
import { RaceSchema } from './race.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'RaceModel', schema: RaceSchema }])],
  controllers: [RaceController],
  providers: [RaceService],
})
export class RaceModule {}

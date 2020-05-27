import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceModule } from './race/race.module';
import { getSecret } from './secrets';

@Module({
  imports: [MongooseModule.forRoot(getSecret('dbUri'), {useNewUrlParser: true}), RaceModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeaponController } from './weapon.controller';
import { WeaponService } from './weapon.service';
import { WeaponSchema } from './weapon.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'WeaponModel', schema: WeaponSchema }]),
  ],
  controllers: [WeaponController],
  providers: [WeaponService],
})
export class WeaponModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { WeaponController } from './weapon.controller';
import { WeaponService } from './weapon.service';

describe('WeaponController', () => {
  let weaponController: WeaponController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WeaponController],
      providers: [WeaponService],
    }).compile();

    weaponController = app.get<WeaponController>(WeaponController);
  });

  describe('root', () => {
    it('should return "Hello Weapon!"', () => {
      expect(weaponController.get()).toBe('Hello Weapon!');
    });
  });
});

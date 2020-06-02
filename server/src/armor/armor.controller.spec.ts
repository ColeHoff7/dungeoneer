import { Test, TestingModule } from '@nestjs/testing';
import { ArmorController } from './armor.controller';
import { ArmorService } from './armor.service';

describe('ArmorController', () => {
  let armorController: ArmorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ArmorController],
      providers: [ArmorService],
    }).compile();

    armorController = app.get<ArmorController>(ArmorController);
  });

  describe('root', () => {
    it('should return "Hello Armor!"', () => {
      expect(armorController.get()).toBe('Hello Armor!');
    });
  });
});

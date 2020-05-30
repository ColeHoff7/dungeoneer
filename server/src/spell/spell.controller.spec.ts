import { Test, TestingModule } from '@nestjs/testing';
import { SpellController } from './spell.controller';
import { SpellService } from './spell.service';

describe('SpellController', () => {
  let spellController: SpellController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SpellController],
      providers: [SpellService],
    }).compile();

    spellController = app.get<SpellController>(SpellController);
  });

  describe('root', () => {
    it('should return "Hello Spell!"', () => {
      expect(spellController.get()).toBe('Hello Spell!');
    });
  });
});

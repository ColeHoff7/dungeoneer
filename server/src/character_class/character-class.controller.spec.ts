import { Test, TestingModule } from '@nestjs/testing';
import { CharacterClassController } from './character-class.controller';
import { CharacterClassService } from './character-class.service';

describe('CharacterClassController', () => {
  let characterClassController: CharacterClassController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CharacterClassController],
      providers: [CharacterClassService],
    }).compile();

    characterClassController = app.get<CharacterClassController>(
      CharacterClassController
    );
  });

  describe('root', () => {
    it('should return "Hello Class!"', () => {
      expect(characterClassController.get()).toBe('Hello CharacterClass!');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';

describe('SkillController', () => {
  let skillController: SkillController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SkillController],
      providers: [SkillService],
    }).compile();

    skillController = app.get<SkillController>(SkillController);
  });

  describe('root', () => {
    it('should return "Hello Skill!"', () => {
      expect(skillController.get()).toBe('Hello Skill!');
    });
  });
});

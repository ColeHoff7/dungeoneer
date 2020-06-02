import { Test, TestingModule } from '@nestjs/testing';
import { RaceController } from './race.controller';
import { RaceService } from './race.service';

describe('RaceController', () => {
  let raceController: RaceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RaceController],
      providers: [RaceService],
    }).compile();

    raceController = app.get<RaceController>(RaceController);
  });

  describe('root', () => {
    it('should return "Hello Race!"', () => {
      expect(raceController.get()).toBe('Hello Race!');
    });
  });
});

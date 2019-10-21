import { Test, TestingModule } from '@nestjs/testing';
import { BooController } from './boo.controller';

describe('Boo Controller', () => {
  let controller: BooController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooController],
    }).compile();

    controller = module.get<BooController>(BooController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CellarsController } from './cellars.controller';

describe('CellarsController', () => {
  let controller: CellarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CellarsController],
    }).compile();

    controller = module.get<CellarsController>(CellarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

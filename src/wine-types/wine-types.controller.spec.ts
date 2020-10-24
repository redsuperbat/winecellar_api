import { Test, TestingModule } from '@nestjs/testing';
import { WineTypesController } from './wine-types.controller';

describe('WineTypesController', () => {
  let controller: WineTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WineTypesController],
    }).compile();

    controller = module.get<WineTypesController>(WineTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { GrapesController } from './grapes.controller';

describe('GrapesController', () => {
  let controller: GrapesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrapesController],
    }).compile();

    controller = module.get<GrapesController>(GrapesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

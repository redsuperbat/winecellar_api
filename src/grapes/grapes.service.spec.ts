import { Test, TestingModule } from '@nestjs/testing';
import { GrapesService } from './grapes.service';

describe('GrapesService', () => {
  let service: GrapesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrapesService],
    }).compile();

    service = module.get<GrapesService>(GrapesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

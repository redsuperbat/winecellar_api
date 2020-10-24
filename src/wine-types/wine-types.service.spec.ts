import { Test, TestingModule } from '@nestjs/testing';
import { WineTypesService } from './wine-types.service';

describe('WineTypesService', () => {
  let service: WineTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WineTypesService],
    }).compile();

    service = module.get<WineTypesService>(WineTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

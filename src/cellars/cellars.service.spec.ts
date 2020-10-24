import { Test, TestingModule } from '@nestjs/testing';
import { CellarsService } from './cellars.service';

describe('CellarsService', () => {
  let service: CellarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CellarsService],
    }).compile();

    service = module.get<CellarsService>(CellarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

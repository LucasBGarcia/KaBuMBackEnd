import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesHistoricService } from './purchases_historic.service';

describe('PurchasesHistoricService', () => {
  let service: PurchasesHistoricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchasesHistoricService],
    }).compile();

    service = module.get<PurchasesHistoricService>(PurchasesHistoricService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

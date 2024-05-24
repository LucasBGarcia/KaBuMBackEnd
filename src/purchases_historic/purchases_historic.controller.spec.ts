import { Test, TestingModule } from '@nestjs/testing';
import { PurchasesHistoricController } from './purchases_historic.controller';

describe('PurchasesHistoricController', () => {
  let controller: PurchasesHistoricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchasesHistoricController],
    }).compile();

    controller = module.get<PurchasesHistoricController>(PurchasesHistoricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

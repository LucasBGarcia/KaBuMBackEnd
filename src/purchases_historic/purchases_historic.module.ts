import { Module } from '@nestjs/common';
import { PurchasesHistoricController } from './purchases_historic.controller';
import { PurchasesHistoricService } from './purchases_historic.service';

@Module({
  controllers: [PurchasesHistoricController],
  providers: [PurchasesHistoricService]
})
export class PurchasesHistoricModule {}

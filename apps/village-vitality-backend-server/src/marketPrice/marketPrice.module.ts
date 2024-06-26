import { Module } from "@nestjs/common";
import { MarketPriceModuleBase } from "./base/marketPrice.module.base";
import { MarketPriceService } from "./marketPrice.service";
import { MarketPriceController } from "./marketPrice.controller";
import { MarketPriceResolver } from "./marketPrice.resolver";

@Module({
  imports: [MarketPriceModuleBase],
  controllers: [MarketPriceController],
  providers: [MarketPriceService, MarketPriceResolver],
  exports: [MarketPriceService],
})
export class MarketPriceModule {}

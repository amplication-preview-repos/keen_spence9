import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketPriceService } from "./marketPrice.service";
import { MarketPriceControllerBase } from "./base/marketPrice.controller.base";

@swagger.ApiTags("marketPrices")
@common.Controller("marketPrices")
export class MarketPriceController extends MarketPriceControllerBase {
  constructor(protected readonly service: MarketPriceService) {
    super(service);
  }
}

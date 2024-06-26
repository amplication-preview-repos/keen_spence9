import * as graphql from "@nestjs/graphql";
import { MarketPriceResolverBase } from "./base/marketPrice.resolver.base";
import { MarketPrice } from "./base/MarketPrice";
import { MarketPriceService } from "./marketPrice.service";

@graphql.Resolver(() => MarketPrice)
export class MarketPriceResolver extends MarketPriceResolverBase {
  constructor(protected readonly service: MarketPriceService) {
    super(service);
  }
}

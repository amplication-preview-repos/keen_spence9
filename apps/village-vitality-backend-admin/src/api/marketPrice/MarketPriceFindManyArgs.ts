import { MarketPriceWhereInput } from "./MarketPriceWhereInput";
import { MarketPriceOrderByInput } from "./MarketPriceOrderByInput";

export type MarketPriceFindManyArgs = {
  where?: MarketPriceWhereInput;
  orderBy?: Array<MarketPriceOrderByInput>;
  skip?: number;
  take?: number;
};

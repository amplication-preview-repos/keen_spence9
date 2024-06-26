import { MarketPrice as TMarketPrice } from "../api/marketPrice/MarketPrice";

export const MARKETPRICE_TITLE_FIELD = "crop";

export const MarketPriceTitle = (record: TMarketPrice): string => {
  return record.crop?.toString() || String(record.id);
};

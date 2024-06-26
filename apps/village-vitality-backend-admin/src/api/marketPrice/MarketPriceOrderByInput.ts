import { SortOrder } from "../../util/SortOrder";

export type MarketPriceOrderByInput = {
  createdAt?: SortOrder;
  crop?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};

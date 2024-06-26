import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MarketPriceWhereInput = {
  crop?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  price?: IntNullableFilter;
};

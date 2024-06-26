import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OfficialWhereInput = {
  contactNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
};

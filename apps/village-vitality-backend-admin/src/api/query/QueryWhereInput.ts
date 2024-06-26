import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueryWhereInput = {
  id?: StringFilter;
  question?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

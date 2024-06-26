import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueryUpdateInput = {
  question?: string | null;
  user?: UserWhereUniqueInput | null;
};

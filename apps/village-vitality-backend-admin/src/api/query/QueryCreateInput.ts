import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueryCreateInput = {
  question?: string | null;
  user?: UserWhereUniqueInput | null;
};

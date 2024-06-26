import { SortOrder } from "../../util/SortOrder";

export type QueryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

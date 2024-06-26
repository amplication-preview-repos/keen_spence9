import { SortOrder } from "../../util/SortOrder";

export type OfficialOrderByInput = {
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  updatedAt?: SortOrder;
};

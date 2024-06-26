import { SortOrder } from "../../util/SortOrder";

export type EmergencyAlertOrderByInput = {
  alertType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

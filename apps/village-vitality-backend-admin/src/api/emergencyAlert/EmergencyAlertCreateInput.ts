import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmergencyAlertCreateInput = {
  alertType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};

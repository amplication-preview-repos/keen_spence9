import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmergencyAlertUpdateInput = {
  alertType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};

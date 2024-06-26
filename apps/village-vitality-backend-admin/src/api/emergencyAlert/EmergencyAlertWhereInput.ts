import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmergencyAlertWhereInput = {
  alertType?: "Option1";
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

import { EmergencyAlertCreateNestedManyWithoutUsersInput } from "./EmergencyAlertCreateNestedManyWithoutUsersInput";
import { QueryCreateNestedManyWithoutUsersInput } from "./QueryCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  queries?: QueryCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};

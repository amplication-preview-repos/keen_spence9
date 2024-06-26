import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmergencyAlertListRelationFilter } from "../emergencyAlert/EmergencyAlertListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { QueryListRelationFilter } from "../query/QueryListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  emergencyAlerts?: EmergencyAlertListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  queries?: QueryListRelationFilter;
  username?: StringFilter;
};

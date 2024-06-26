import { EmergencyAlert } from "../emergencyAlert/EmergencyAlert";
import { Query } from "../query/Query";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  emergencyAlerts?: Array<EmergencyAlert>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  queries?: Array<Query>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

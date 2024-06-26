import { EmergencyAlertWhereInput } from "./EmergencyAlertWhereInput";
import { EmergencyAlertOrderByInput } from "./EmergencyAlertOrderByInput";

export type EmergencyAlertFindManyArgs = {
  where?: EmergencyAlertWhereInput;
  orderBy?: Array<EmergencyAlertOrderByInput>;
  skip?: number;
  take?: number;
};

import { EmergencyAlert as TEmergencyAlert } from "../api/emergencyAlert/EmergencyAlert";

export const EMERGENCYALERT_TITLE_FIELD = "id";

export const EmergencyAlertTitle = (record: TEmergencyAlert): string => {
  return record.id?.toString() || String(record.id);
};

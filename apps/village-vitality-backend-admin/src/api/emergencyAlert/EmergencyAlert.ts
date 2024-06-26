import { User } from "../user/User";

export type EmergencyAlert = {
  alertType?: "Option1" | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

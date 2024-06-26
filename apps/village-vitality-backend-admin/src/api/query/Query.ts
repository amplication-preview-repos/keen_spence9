import { User } from "../user/User";

export type Query = {
  createdAt: Date;
  id: string;
  question: string | null;
  updatedAt: Date;
  user?: User | null;
};

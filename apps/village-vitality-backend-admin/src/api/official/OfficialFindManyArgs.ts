import { OfficialWhereInput } from "./OfficialWhereInput";
import { OfficialOrderByInput } from "./OfficialOrderByInput";

export type OfficialFindManyArgs = {
  where?: OfficialWhereInput;
  orderBy?: Array<OfficialOrderByInput>;
  skip?: number;
  take?: number;
};

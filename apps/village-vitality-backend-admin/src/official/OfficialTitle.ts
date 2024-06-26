import { Official as TOfficial } from "../api/official/Official";

export const OFFICIAL_TITLE_FIELD = "name";

export const OfficialTitle = (record: TOfficial): string => {
  return record.name?.toString() || String(record.id);
};

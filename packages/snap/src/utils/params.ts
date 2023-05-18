import { Describe, object, optional, string } from "superstruct";

export interface DecryptRecordParams {
  viewKey?: string;
  cipherText: string;
}

export const decryptRecordSchema: Describe<DecryptRecordParams> = object({
  viewKey: optional(string()),
  cipherText: string(),
});

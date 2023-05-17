import { Describe, object, string } from "superstruct";

export interface DecryptRecordParams {
  viewKey: string;
  cipherText: string;
}

export const decryptRecordSchema: Describe<DecryptRecordParams> = object({
  viewKey: string(),
  cipherText: string(),
});

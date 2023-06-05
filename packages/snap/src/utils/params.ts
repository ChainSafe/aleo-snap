import { Describe, object, optional, string } from "superstruct";

export interface DecryptParams {
  viewKey?: string;
  cipherText: string;
}

export const decryptSchema: Describe<DecryptParams> = object({
  viewKey: optional(string()),
  cipherText: string(),
});
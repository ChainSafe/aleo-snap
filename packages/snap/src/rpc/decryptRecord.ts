import { ViewKey } from "aleo-snap-wasm";
import { DecryptRecordParams } from "../utils/params";

export const decryptRecord = (params: DecryptRecordParams): string => {
  return ViewKey.from_string(params.viewKey).decrypt(params.cipherText);
};

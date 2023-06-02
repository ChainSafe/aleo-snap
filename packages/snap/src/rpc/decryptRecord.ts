import { ViewKey } from "@chainsafe/aleo-snap-wasm";
import { SnapsGlobalObject } from "@metamask/snaps-types";
import { DecryptRecordParams } from "../utils/params";
import { getPrivateKey } from "../aleo/account";

export const decryptRecord = async (
  snap: SnapsGlobalObject,
  params: DecryptRecordParams
): Promise<string> => {
  const privateKey = await getPrivateKey(snap);

  if (params.viewKey)
    return ViewKey.from_string(params.viewKey).decrypt(params.cipherText);
  else {
    const userViewKey = ViewKey.from_private_key(privateKey).to_string();
    return ViewKey.from_string(userViewKey).decrypt(params.cipherText);
  }
};

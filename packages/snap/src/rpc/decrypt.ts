import { ViewKey } from "@chainsafe/aleo-snap-wasm";
import { SnapsGlobalObject } from "@metamask/snaps-types";
import { DecryptParams } from "../utils/params";
import { getPrivateKey } from "../aleo/account";

export const decrypt = async (
  snap: SnapsGlobalObject,
  params: DecryptParams
): Promise<string> => {
  if (params.viewKey)
    return ViewKey.from_string(params.viewKey).decrypt(params.cipherText);

  const privateKey = await getPrivateKey(snap);
  const userViewKey = ViewKey.from_private_key(privateKey).to_string();
  return ViewKey.from_string(userViewKey).decrypt(params.cipherText);
};

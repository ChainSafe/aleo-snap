import { ViewKey } from "@chainsafe/aleo-snap-wasm";
import { SnapsGlobalObject } from "@metamask/snaps-types";
import { getPrivateKey } from "../aleo/account";

export const getViewKey = async (snap: SnapsGlobalObject): Promise<string> => {
  const privateKey = await getPrivateKey(snap);
  return ViewKey.from_private_key(privateKey).to_string();
};

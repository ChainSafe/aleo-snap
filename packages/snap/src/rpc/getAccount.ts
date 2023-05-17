import { Address } from "aleo-snap-wasm";
import { SnapsGlobalObject } from "@metamask/snaps-types";
import { getPrivateKey } from "../aleo/account";

export const getAccount = async (snap: SnapsGlobalObject): Promise<string> => {
  const privateKey = await getPrivateKey(snap);
  return Address.from_private_key(privateKey).to_string();
};

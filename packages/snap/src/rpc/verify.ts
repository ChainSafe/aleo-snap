import { Address, Signature } from "@chainsafe/aleo-snap-wasm";
import { SnapsGlobalObject } from "@metamask/snaps-types";
import { VerifyParams } from "../utils/params";
import { getPrivateKey } from "../aleo/account";
import { Buffer } from "buffer";

export const verify = async (
  snap: SnapsGlobalObject,
  params: VerifyParams
): Promise<boolean> => {
  const signature = Signature.from_string(params.signature);
  const messageUint8 = Uint8Array.from(Buffer.from(params.message, "hex"));

  const privateKey = await getPrivateKey(snap);
  const address = Address.from_private_key(privateKey);
  
  return address.verify(messageUint8, signature);
}

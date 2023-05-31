import { Buffer } from "buffer";
import { Signature } from "@chainsafe/aleo-snap-wasm";
import { SnapsGlobalObject } from "@metamask/snaps-types";
import { panel, text, heading } from "@metamask/snaps-ui";
import { getPrivateKey } from "../aleo/account";

export const sign = async (
  snap: SnapsGlobalObject,
  message: string
): Promise<Signature> => {
  const privateKey = await getPrivateKey(snap);
  const messageUint8 = Uint8Array.from(Buffer.from(message, "hex"));

  const confirmation = await snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([heading("Confirm signing this message?"), text(message)]),
    },
  });

  if (!confirmation) throw Error("Transaction not confirmed");

  return privateKey.sign(messageUint8);
};

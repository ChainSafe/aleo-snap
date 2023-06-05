import { Buffer } from "buffer";
import { Signature } from "@chainsafe/aleo-snap-wasm";
import { SnapsGlobalObject } from "@metamask/snaps-types";
import { copyable, divider, heading, panel, text } from "@metamask/snaps-ui";
import { getPrivateKey } from "../aleo/account";

export const sign = async (
  snap: SnapsGlobalObject,
  origin: string,
  message: string
): Promise<Signature> => {
  const privateKey = await getPrivateKey(snap);
  const messageUint8 = Uint8Array.from(Buffer.from(message, "hex"));

  const content = panel([
    heading("Do you want sign this message?"),
    text("**Origin site:**"),
    text(origin),
    divider(),
    copyable(message),
  ]);

  const confirmation = await snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content,
    },
  });

  if (!confirmation) throw Error("Transaction not confirmed");

  return privateKey.sign(messageUint8);
};

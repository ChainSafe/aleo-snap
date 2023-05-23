import { ViewKey } from "@chainsafe/aleo-snap-wasm";
import { SnapsGlobalObject } from "@metamask/snaps-types";
import { heading, panel, text } from "@metamask/snaps-ui";
import { getPrivateKey } from "../aleo/account";

export const getViewKey = async (
  snap: SnapsGlobalObject,
  origin: string
): Promise<string> => {
  const privateKey = await getPrivateKey(snap);

  const confirmation = await snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading(`Giving View Key Access`),
        text(`${origin} is requesting access to View Key`),
      ]),
    },
  });

  if (!confirmation) throw new Error("User decline request");
  return ViewKey.from_private_key(privateKey).to_string();
};

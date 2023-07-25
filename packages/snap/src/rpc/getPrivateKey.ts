import { SnapsGlobalObject } from "@metamask/snaps-types";
import { heading, panel, text } from "@metamask/snaps-ui";
import { getPrivateKey as getPrivateKeyAleo } from "../aleo/account";

export const getPrivateKey = async (
  snap: SnapsGlobalObject,
  origin: string
): Promise<string> => {
  const privateKey = await getPrivateKeyAleo(snap);

  const confirmation = await snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading(`Giving Private Key Access`),
        text(`**${origin}** is requesting access to your private key`),
      ]),
    },
  });

  if (!confirmation) throw new Error("User decline request");
  return privateKey.to_string();
};

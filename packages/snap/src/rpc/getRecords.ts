import { SnapsGlobalObject } from "@metamask/snaps-types";
import { heading, panel, text } from "@metamask/snaps-ui";
import { Record, Records } from "@chainsafe/aleo-snap-shared";
import { getPersistedData } from "../storage";

export const getRecords = async (
  snap: SnapsGlobalObject,
  origin: string
): Promise<Records> => {
  const confirmation = await snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading(`Giving Unspent Records Access`),
        text(`**${origin}** is requesting access to unspent records`),
      ]),
    },
  });
  if (!confirmation) throw new Error("User decline request");

  const persistedData = await getPersistedData(snap);
  return {
    latestSyncBlock: persistedData.latestSyncBlock || 0,
    records: JSON.parse(persistedData.records || "[]") as Record[],
  };
};

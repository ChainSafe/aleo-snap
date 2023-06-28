import { SnapsGlobalObject } from "@metamask/snaps-types";
import { heading, panel, text } from "@metamask/snaps-ui";
import { RecordCiphertext } from "@chainsafe/aleo-snap-wasm";
import { Balance, Record } from "@chainsafe/aleo-snap-shared";
import { getPersistedData } from "../storage";
import { getPrivateKey } from "../aleo/account";

export const getBalance = async (
  snap: SnapsGlobalObject,
  origin: string
): Promise<Balance> => {
  const confirmation = await snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading(`Giving Access to user Balance`),
        text(`**${origin}** is requesting access user Balance`),
      ]),
    },
  });
  if (!confirmation) throw new Error("User decline request");

  const persistedData = await getPersistedData(snap);
  const records = JSON.parse(persistedData.records || "[]") as Record[];

  const privateKey = await getPrivateKey(snap);
  const viewKey = privateKey.to_view_key();
  const balance = records.reduce((value, record) => {
    const recordCiphertext = RecordCiphertext.fromString(record.value);
    const recordPlainText = recordCiphertext.decrypt(viewKey);
    return value + recordPlainText.microcredits();
  }, BigInt(0));

  return {
    latestSyncBlock: persistedData.latestSyncBlock || 0,
    balance: balance.toString(),
  };
};

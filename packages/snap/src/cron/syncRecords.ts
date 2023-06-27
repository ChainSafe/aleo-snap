import { SnapsGlobalObject } from "@metamask/snaps-types";
import { RecordCiphertext } from "@chainsafe/aleo-snap-wasm";
import {
  getCurrentProcess,
  getLatestSyncBlock,
  getRecords,
  handleNetworkReset,
  updateCurrentProcess,
  updateLatestSyncBlock,
  updateRecords,
} from "../storage/records";
import { getBlockRange } from "../services/node";
import { filterCreditsRecords } from "../utils/filterCreditsRecords";
import { getPrivateKey } from "../aleo/account";
import { filterUnspentRecords } from "../utils/filterUnspentRecords";
import { ensureLatestBlock } from "../utils/ensureLatestBlock";

export const syncRecords = async (snap: SnapsGlobalObject): Promise<null> => {
  const privateKey = await getPrivateKey(snap);
  const viewKey = privateKey.to_view_key();

  const latestBlock = await ensureLatestBlock();
  await handleNetworkReset(snap, latestBlock);
  const allRecords = await getRecords(snap);
  await updateCurrentProcess(snap, latestBlock);

  // Main loop to fetch all available blocks
  let isSynced = false;
  while (!isSynced) {
    const latestSyncedBlock = await getLatestSyncBlock(snap);
    const currentProcess = await getCurrentProcess(snap);
    if (currentProcess !== latestBlock) break;

    const highestSyncedBlock =
      latestSyncedBlock + 50 > latestBlock
        ? latestBlock
        : latestSyncedBlock + 50;

    const blocks = await getBlockRange(latestSyncedBlock, highestSyncedBlock);
    const records = filterCreditsRecords(viewKey)(blocks);

    const unspentRecords = await filterUnspentRecords(
      viewKey,
      privateKey,
      records
    );
    unspentRecords.forEach((record) => {
      if (
        allRecords.findIndex(
          (storedRecord) => storedRecord.value === record.toString()
        ) !== -1
      )
        return;
      allRecords.push({ value: record.toString() });
    });

    if (!unspentRecords.length) await updateRecords(snap, allRecords);
    await updateLatestSyncBlock(snap, highestSyncedBlock);

    if (highestSyncedBlock === latestSyncedBlock) isSynced = true;
  }

  // Remove all spent records from "database"
  if (isSynced) {
    const unspentRecords = await filterUnspentRecords(
      viewKey,
      privateKey,
      allRecords.map(({ value }) => RecordCiphertext.fromString(value))
    );
    if (unspentRecords.length !== allRecords.length)
      await updateRecords(
        snap,
        unspentRecords.map((record) => ({ value: record.toString() }))
      );
  }

  return null;
};

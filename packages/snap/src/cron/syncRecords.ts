import { SnapsGlobalObject } from "@metamask/snaps-types";
import {
  getCurrentProcess,
  getLatestSyncBlock,
  getRecords,
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
  console.warn("syncRecords", new Date().toString());
  const privateKey = await getPrivateKey(snap);
  const viewKey = privateKey.to_view_key();

  const allRecords = await getRecords(snap);
  const latestBlock = await ensureLatestBlock();
  await updateCurrentProcess(snap, latestBlock);

  let isSynced = false;
  while (!isSynced) {
    const latestSyncedBlock = await getLatestSyncBlock(snap);
    const currentProcess = await getCurrentProcess(snap);
    if (currentProcess !== latestBlock) break;

    const highestSyncedBlock =
      latestSyncedBlock + 50 > latestBlock
        ? latestBlock
        : latestSyncedBlock + 50;

    console.warn(latestBlock, latestSyncedBlock, highestSyncedBlock);

    const blocks = await getBlockRange(latestSyncedBlock, highestSyncedBlock);
    const records = filterCreditsRecords(viewKey)(blocks);

    const unspentRecords = await filterUnspentRecords(
      viewKey,
      privateKey,
      records
    );
    console.log(unspentRecords.length, unspentRecords);
    unspentRecords.forEach((record) => {
      if (
        !allRecords.find(
          (storedRecord) => storedRecord.value === record.toString()
        )
      )
        return;
      allRecords.push({ value: record.toString() });
    });

    console.warn(unspentRecords, allRecords);
    if (!unspentRecords.length) await updateRecords(snap, allRecords);
    await updateLatestSyncBlock(snap, highestSyncedBlock);

    const persistedData = await snap.request({
      method: "snap_manageState",
      params: { operation: "get" },
    });
    console.log(persistedData);

    if (highestSyncedBlock === latestSyncedBlock) isSynced = true;
  }

  console.warn("it is synced!");
  return null;
};

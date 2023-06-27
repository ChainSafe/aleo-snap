import { SnapsGlobalObject } from "@metamask/snaps-types";
import { getPersistedData } from "./index";

export const getLatestSyncBlock = async (
  snap: SnapsGlobalObject
): Promise<number> => {
  const persistedData = await getPersistedData(snap);

  if (!persistedData || !persistedData.latestSyncBlock) return 0;
  return persistedData.latestSyncBlock;
};

export const updateLatestSyncBlock = async (
  snap: SnapsGlobalObject,
  latestSyncBlock: number
): Promise<void> => {
  const persistedData = await getPersistedData(snap);
  await snap.request({
    method: "snap_manageState",
    params: {
      operation: "update",
      newState: { ...persistedData, latestSyncBlock },
    },
  });
};

export interface Record {
  value: string;
}

export const getRecords = async (
  snap: SnapsGlobalObject
): Promise<Record[]> => {
  const persistedData = await getPersistedData(snap);

  if (!persistedData || !persistedData.records) return [];
  return JSON.parse(persistedData.records) as Record[];
};

export const updateRecords = async (
  snap: SnapsGlobalObject,
  records: Record[]
): Promise<void> => {
  const persistedData = await getPersistedData(snap);

  await snap.request({
    method: "snap_manageState",
    params: {
      operation: "update",
      newState: { ...persistedData, records: JSON.stringify(records) },
    },
  });
};

export const getCurrentProcess = async (
  snap: SnapsGlobalObject
): Promise<number> => {
  const persistedData = await getPersistedData(snap);

  if (!persistedData || !persistedData.currentProcess) return 0;
  return persistedData.currentProcess;
};

export const updateCurrentProcess = async (
  snap: SnapsGlobalObject,
  currentProcess: number
): Promise<void> => {
  const persistedData = await getPersistedData(snap);

  await snap.request({
    method: "snap_manageState",
    params: {
      operation: "update",
      newState: { ...persistedData, currentProcess },
    },
  });
};

export const handleNetworkReset = async (
  snap: SnapsGlobalObject,
  latestBlock: number
): Promise<void> => {
  const persistedData = await getPersistedData(snap);

  if (
    persistedData.latestSyncBlock &&
    persistedData.latestSyncBlock - 1000 > latestBlock
  )
    await snap.request({
      method: "snap_manageState",
      params: {
        operation: "update",
        newState: { ...persistedData, records: "[]", latestSyncBlock: 0 },
      },
    });
};

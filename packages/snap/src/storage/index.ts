import { SnapsGlobalObject } from "@metamask/snaps-types";

export interface PersistedData {
  latestSyncBlock?: number;
  records?: string;
  currentProcess?: number;
}

export const getPersistedData = async (
  snap: SnapsGlobalObject
): Promise<PersistedData> => {
  const persistedData = await snap.request({
    method: "snap_manageState",
    params: { operation: "get" },
  });

  if (!persistedData) return {};
  return persistedData;
};

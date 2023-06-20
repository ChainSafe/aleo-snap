import { SnapRpcMethodRequest } from "@chainsafe/aleo-snap-types";

export type GetSnapsResponse = {
  [k: string]: {
    permissionName?: string;
    id?: string;
    version?: string;
    initialPermissions?: { [k: string]: unknown };
  };
};

declare global {
  interface Window {
    ethereum: {
      isMetaMask: boolean;
      isUnlocked: Promise<boolean>;
      request: <T>(
        request: SnapRpcMethodRequest | { method: string; params?: any }
      ) => Promise<T>;
    };
  }
}

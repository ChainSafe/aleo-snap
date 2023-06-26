import { GetSnapsResponse } from "./types";

async function getWalletSnaps(): Promise<GetSnapsResponse> {
  return await window.ethereum.request({
    method: "wallet_getSnaps",
  });
}

export async function isSnapInstalled(
  snapOrigin: string,
  version?: string
): Promise<boolean> {
  try {
    return !!Object.values(await getWalletSnaps()).find(
      (permission) =>
        permission.id === snapOrigin &&
        (!version || permission.version === version)
    );
  } catch (e) {
    console.log("Failed to obtain installed snaps", e);
    return false;
  }
}

async function isMetaMaskFlask(): Promise<boolean> {
  try {
    const walletName = await window.ethereum.request<string>({
      method: "web3_clientVersion",
    });
    return walletName.includes("flask");
  } catch {
    return false;
  }
}

export async function isMetaMaskFlaskAvailable(): Promise<boolean> {
  if (!window.ethereum) {
    throw new Error("Metamask is not installed");
  }
  return await Promise.race([
    isMetaMaskFlask(),
    new Promise<boolean>(() =>
      setTimeout(() => {
        return false;
      }, 1000)
    ),
  ]);
}

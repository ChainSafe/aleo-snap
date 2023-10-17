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

async function isMetaMask(): Promise<boolean> {
  try {
    const walletName = await window.ethereum.request<string>({
      method: "web3_clientVersion",
    });
    return walletName.includes("MetaMask");
  } catch {
    return false;
  }
}

export async function isMetaMaskAvailable(): Promise<boolean> {
  if (!window.ethereum) {
    throw new Error("Metamask is not installed");
  }
  return await Promise.race([
    isMetaMask(),
    // in case of wallet not having rpc method web3_clientVersion
    new Promise<boolean>(() =>
      setTimeout(() => {
        return false;
      }, 1000)
    ),
  ]);
}

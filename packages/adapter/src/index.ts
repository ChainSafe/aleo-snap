import { isMetaMaskAvailable, isSnapInstalled } from "./utils";
import { AleoSnap } from "./snap";

export { AleoSnap } from "./snap";

const defaultSnapOrigin = "npm:@chainsafe/aleo-snap";

export { isMetaMaskAvailable, isSnapInstalled } from "./utils";

export type SnapInstallationParamNames = "version" | string;

/**
 * Install and enable Aleo snap
 *
 * Checks for existence of Metamask and version compatibility with snaps before installation.
 *
 * @param snapOrigin
 *
 * @return AleoSnap - adapter object that exposes snap API
 */
export async function enableAleoSnap(
  snapOrigin?: string,
  snapInstallationParams: Record<SnapInstallationParamNames, unknown> = {}
): Promise<AleoSnap> {
  const snapId = snapOrigin ?? defaultSnapOrigin;

  // check for metamask
  if (!(await isMetaMaskAvailable())) {
    throw new Error("Metamask is not installed");
  }
  // check for snap
  const isInstalled = await isSnapInstalled(snapId);

  if (!isInstalled) {
    // // enable snap
    await window.ethereum.request({
      method: "wallet_requestSnaps",
      params: {
        [snapId]: { ...snapInstallationParams },
      },
    });
  }

  // create snap describer
  const snap = new AleoSnap(snapOrigin || defaultSnapOrigin);

  // return snap object
  return snap;
}

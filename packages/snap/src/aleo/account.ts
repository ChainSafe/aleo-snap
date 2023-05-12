import { PrivateKey } from "aleo-snap-wasm";
import { Buffer } from "buffer";

export const getPrivateKey = async (): Promise<PrivateKey> => {
  const node = (await snap.request({
    method: `snap_getBip44Entropy`,
    params: {
      coinType: 1,
    },
  }))
  if (!node.privateKey) {
    throw new Error("No private key found.")
  }
  const seed = Uint8Array.from(
    Buffer.from(node.privateKey.substring(2), "hex")
  );
  return PrivateKey.from_seed_unchecked(seed);

}
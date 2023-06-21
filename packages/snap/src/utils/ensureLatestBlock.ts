import type { Block } from "@aleohq/sdk";
import { getLatestBlock } from "../services/node";

export const ensureLatestBlock = async (): Promise<number> => {
  const latestBlocks = await Promise.allSettled<Block>(
    [1, 2, 3, 4].map(() => getLatestBlock())
  );

  return latestBlocks.reduce((value, result) => {
    if (result.status === "rejected") return value;
    const height = result.value.header.metadata.height;
    if (value < height) return height;
    return value;
  }, 0);
};

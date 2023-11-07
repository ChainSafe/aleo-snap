import { useEffect, useState } from 'react';
import { getLatestBlock } from '../services/node.ts';

export function useLatestBlockHeight(): number | undefined {
  const [blockNumber, setBlockNumber] = useState<number | undefined>();

  useEffect(() => {
    let controller: AbortController;
    let interval: number | undefined;

    try {
      interval = setInterval(() => {
        controller = new AbortController();
        void getLatestBlock(controller.signal).then((block) => {
          const height = block.header.metadata.height;
          setBlockNumber((number) => (!number || height > number ? height : number));
        });
      }, 1000) as unknown as number;
    } catch {
      setBlockNumber(undefined);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (controller) controller.abort();
    };
  }, []);

  return blockNumber;
}

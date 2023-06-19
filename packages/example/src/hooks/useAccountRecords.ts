import { RecordPlaintext } from '@chainsafe/aleo-snap-wasm/lib';
import { useEffect } from 'react';
import { ViewKey } from '@chainsafe/aleo-snap-wasm/src/wasmBuild/aleo_wasm';
import { getBlockRange } from '../services/node.ts';
import { processRecord } from '../utils/processRecord.ts';
import { useWasm } from './useWasm';

const EXAMPLE_VIEW_KEY = 'AViewKey1icf4Y5hujfpeLBpxfMSX2V8UGNVJ9pUa4m5SQd1HkWy5';

export function useAccountRecords(): RecordPlaintext[] {
  const isReady = useWasm();

  useEffect(() => {
    if (!isReady) return;
    const viewKey = ViewKey.from_string(EXAMPLE_VIEW_KEY);
    // 140494
    void getBlockRange(140493, 140495).then(processRecord(viewKey)).then(console.warn);
  }, [isReady]);

  return [];
}

import { useEffect, useState } from 'react';
import { wasm } from '@chainsafe/aleo-snap-wasm/src/wasm';
import init from '@chainsafe/aleo-snap-wasm/src/wasmBuild/aleo_wasm';

export function useWasm(): boolean {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const binary = Uint8Array.from(atob(wasm), (c) => c.charCodeAt(0));
    void WebAssembly.compile(binary)
      .then((module) => init(module))
      .then(() => setReady(true));
  }, []);

  return isReady;
}

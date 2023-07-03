import {
  isSnapInstalled,
  isMetaMaskFlaskAvailable,
  AleoSnap,
} from '@chainsafe/aleo-snap-adapter';
import { AleoSnapApi, MetamaskRpcRequest } from '@chainsafe/aleo-snap-shared';
import { useCallback, useEffect, useState } from 'react';

const isDev = true;
const snapOrigin = isDev ? 'local:http://localhost:8081' : 'npm:@chainsafe/aleo-snap';
const version = '1.0.5';
type aleoSnapOriginKey = typeof snapOrigin;

declare global {
  interface Window {
    ethereum: {
      isMetaMask: boolean;
      request: <T>(request: MetamaskRpcRequest) => Promise<T>;
    };
  }
}

export interface ISnap {
  isMetaMaskFlask: boolean;
  snapInstalled: boolean;
  enable: () => Promise<void>;
  aleoSnapApi: AleoSnapApi | null;
}

export function useSnap(): ISnap {
  const [isMetaMaskFlask, setIsMetaMaskFlask] = useState(false);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [aleoSnapApi, setAleoSnapApi] = useState<AleoSnapApi | null>(null);

  const enable = useCallback(async () => {
    if (!isMetaMaskFlask) return;
    const result = await window.ethereum.request<
      Record<aleoSnapOriginKey, { enabled: boolean }>
    >({
      method: 'wallet_requestSnaps',
      params: {
        [snapOrigin]: {},
      },
    });
    setSnapInstalled(result[snapOrigin].enabled);

    const AleoSnapInstance = new AleoSnap(snapOrigin);
    const aleoSnapApi = await AleoSnapInstance.getAleoSnapApi();
    setAleoSnapApi(aleoSnapApi);
  }, [isMetaMaskFlask]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const isMetaMaskFlask = await isMetaMaskFlaskAvailable();
      if (!isMetaMaskFlask) return;
      const isInstalled = await isSnapInstalled(snapOrigin, version);
      setIsMetaMaskFlask(isMetaMaskFlask);
      setSnapInstalled(isInstalled);
    })();
  }, []);

  return { isMetaMaskFlask, snapInstalled, enable, aleoSnapApi };
}

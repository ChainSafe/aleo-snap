import {
  isSnapInstalled,
  isMetaMaskFlaskAvailable,
  AleoSnap,
} from '@chainsafe/aleo-snap-adapter';
import { MetamaskRpcRequest } from '@chainsafe/aleo-snap-shared';
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
  address: string;
}

export function useSnap(): ISnap {
  const [isMetaMaskFlask, setIsMetaMaskFlask] = useState(false);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [address, setAddress] = useState<string>('');

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
  }, [isMetaMaskFlask]);

  useEffect(() => {
    if (snapInstalled) {
      void (async () => {
        const AleoSnapInstance = new AleoSnap(snapOrigin);
        const aleoSnapApi = await AleoSnapInstance.getAleoSnapApi();
        const address = await aleoSnapApi.getAccount();
        setAddress(address);
        return;
      })();
      return;
    }
    void (async () => {
      const isMetaMaskFlask = await isMetaMaskFlaskAvailable();
      if (!isMetaMaskFlask) return;
      const isInstalled = await isSnapInstalled(snapOrigin, version);
      setIsMetaMaskFlask(isMetaMaskFlask);
      setSnapInstalled(isInstalled);
    })();
  }, [snapInstalled]);

  return { isMetaMaskFlask, snapInstalled, enable, address };
}

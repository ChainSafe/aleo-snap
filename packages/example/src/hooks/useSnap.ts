import {
  isSnapInstalled,
  isMetaMaskFlaskAvailable,
  AleoSnap,
} from '@chainsafe/aleo-snap-adapter';
import { AleoSnapApi, MetamaskRpcRequest } from '@chainsafe/aleo-snap-shared';
import { useCallback, useEffect, useState } from 'react';

const isDev = import.meta.env.DEV;
const snapOrigin = isDev
  ? import.meta.env.VITE_APP_SNAP_ORIGIN_LOCAL
  : import.meta.env.VITE_APP_SNAP_ORIGIN_NPM;
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
  checksCompleted: boolean;
  enable: () => Promise<void>;
  address: string;
  showViewKey: () => Promise<void>;
  viewKey: string;
}

export function useSnap(): ISnap {
  const [isMetaMaskFlask, setIsMetaMaskFlask] = useState(false);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [checksCompleted, setChecksCompleted] = useState(false);
  const [aleoSnapApi, setAleoSnapApi] = useState<AleoSnapApi | null>(null);
  const [address, setAddress] = useState<string>('');
  const [viewKey, setViewKey] = useState<string>('');

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

  const showViewKey = useCallback(async () => {
    if (!aleoSnapApi) return;
    const viewKey = await aleoSnapApi.getViewKey();
    setViewKey(viewKey);
  }, [aleoSnapApi]);

  //initial checks
  useEffect(() => {
    void (async () => {
      const isMetaMaskFlask = await isMetaMaskFlaskAvailable();
      if (!isMetaMaskFlask) return;
      const isInstalled = await isSnapInstalled(snapOrigin);
      setChecksCompleted(true);
      setIsMetaMaskFlask(isMetaMaskFlask);
      setSnapInstalled(isInstalled);
    })();
  }, []);

  //initial rpc calls
  useEffect(() => {
    if (snapInstalled) {
      void (async () => {
        const AleoSnapInstance = new AleoSnap(snapOrigin);
        const aleoSnapApi = await AleoSnapInstance.getAleoSnapApi();
        setAleoSnapApi(aleoSnapApi);
        const address = await aleoSnapApi.getAccount();
        setAddress(address);
        return;
      })();
      return;
    }
  }, [snapInstalled]);

  return {
    isMetaMaskFlask,
    snapInstalled,
    checksCompleted,
    enable,
    address,
    showViewKey,
    viewKey,
  };
}

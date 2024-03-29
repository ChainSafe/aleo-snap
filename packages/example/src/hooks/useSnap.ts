import {
  isSnapInstalled,
  isMetaMaskAvailable,
  AleoSnap,
} from '@chainsafe/aleo-snap-adapter';
import {
  AleoSnapApi,
  Balance,
  MetamaskRpcRequest,
  Records,
} from '@chainsafe/aleo-snap-shared';
import { useCallback, useEffect, useState } from 'react';
import { getPublicBalance } from '../services/node';

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
  isMetaMask: boolean;
  snapInstalled: boolean;
  checksCompleted: boolean;
  enable: () => Promise<void>;
  address: string;
  getBalance: () => Promise<void>;
  balance: Balance | null;
  showViewKey: () => Promise<void>;
  viewKey: string;
  showPrivateKey: () => Promise<void>;
  privateKey: string;
  signMessage: (message: string) => Promise<void>;
  signature: string;
  verifyMessage: (message: string, signature: string) => Promise<void>;
  isMessageVerified: boolean | null;
  showRecords: () => Promise<void>;
  records: Records | null;
  userPublicBalance: string | undefined;
}

export function useSnap(): ISnap {
  const [isMetaMask, setIsMetaMask] = useState(false);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [checksCompleted, setChecksCompleted] = useState(false);
  const [aleoSnapApi, setAleoSnapApi] = useState<AleoSnapApi | null>(null);
  const [address, setAddress] = useState<string>('');
  const [viewKey, setViewKey] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');
  const [balance, setBalance] = useState<Balance | null>(null);
  const [signature, setSignature] = useState<string>('');
  const [isMessageVerified, setIsMessageVerified] = useState<boolean | null>(null);
  const [records, setRecords] = useState<Records | null>(null);
  const [userPublicBalance, setUserPublicBalance] = useState<string | undefined>();

  const enable = useCallback(async () => {
    if (!isMetaMask) return;
    const result = await window.ethereum.request<
      Record<aleoSnapOriginKey, { enabled: boolean }>
    >({
      method: 'wallet_requestSnaps',
      params: {
        [snapOrigin]: {},
      },
    });
    setSnapInstalled(result[snapOrigin].enabled);
  }, [isMetaMask]);

  const showViewKey = useCallback(async () => {
    if (!aleoSnapApi) return;
    const viewKey = await aleoSnapApi.getViewKey();
    setViewKey(viewKey);
  }, [aleoSnapApi]);

  const showPrivateKey = useCallback(async () => {
    if (!aleoSnapApi) return;
    const privateKey = await aleoSnapApi.getPrivateKey();
    setPrivateKey(privateKey);
  }, [aleoSnapApi]);

  const getBalance = useCallback(async () => {
    if (!aleoSnapApi) return;
    const balance: Balance = await aleoSnapApi.getBalance();
    setBalance(balance);
  }, [aleoSnapApi]);

  const signMessage = useCallback(
    async (message: string) => {
      if (!aleoSnapApi) return;
      const signature = await aleoSnapApi.sign(message);
      setSignature(signature);
    },
    [aleoSnapApi],
  );

  const verifyMessage = useCallback(
    async (message: string, signature: string) => {
      if (!aleoSnapApi) return;
      try {
        const isVerified = await aleoSnapApi.verify(message, signature);
        setIsMessageVerified(isVerified);
      } catch (e) {
        setIsMessageVerified(false);
        throw e;
      }
      setTimeout(() => {
        setIsMessageVerified(null);
      }, 1000);
    },
    [aleoSnapApi],
  );

  const showRecords = useCallback(async () => {
    if (!aleoSnapApi) return;
    const records = await aleoSnapApi.getRecords();
    setRecords(records);
  }, [aleoSnapApi]);

  //initial checks
  useEffect(() => {
    void (async () => {
      const isMetaMask = await isMetaMaskAvailable();
      if (!isMetaMask) return;
      const isInstalled = await isSnapInstalled(snapOrigin);
      setChecksCompleted(true);
      setIsMetaMask(isMetaMask);
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
    }
  }, [snapInstalled]);

  useEffect(() => {
    if (address) {
      void (async () => {
        const publicBalance = await getPublicBalance(address);
        setUserPublicBalance(publicBalance);
      })();
    }
  }, [address]);

  return {
    isMetaMask,
    snapInstalled,
    checksCompleted,
    enable,
    address,
    showViewKey,
    viewKey,
    showPrivateKey,
    privateKey,
    getBalance,
    balance,
    signMessage,
    signature,
    verifyMessage,
    isMessageVerified,
    showRecords,
    records,
    userPublicBalance,
  };
}

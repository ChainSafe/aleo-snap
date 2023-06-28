import { Signature } from "@chainsafe/aleo-snap-wasm";

export { Signature } from "@chainsafe/aleo-snap-wasm";

export enum Methods {
  GetAccount = "aleo_getAccount",
  GetViewKey = "aleo_getViewKey",
  Decrypt = "aleo_decrypt",
  Sign = "aleo_sign",
  Verify = "aleo_verify",
  SyncRecords = "aleo_syncRecords",
  GetBalance = "aleo_getBalance",
  GetRecords = "aleo_getRecords",
}

export interface GetAccountRequest {
  method: "aleo_getAccount";
}

export interface GetViewKeyRequest {
  method: "aleo_getViewKey";
}

export interface DecryptRequest {
  method: "aleo_decrypt";
  params: {
    cipherText: string;
    viewKey?: string;
  };
}

export interface SignRequest {
  method: "aleo_sign";
  params: {
    message: string;
  };
}

export interface VerifyRequest {
  method: "aleo_verify";
  params: {
    message: string;
    signature: string;
  };
}

export interface GetBalanceRequest {
  method: "aleo_getBalance";
}

export interface GetRecordsRequest {
  method: "aleo_getRecords";
}

export interface SyncRecordsRequest {
  method: "aleo_syncRecords";
}

export type AleoSnapRpcRequest =
  | GetAccountRequest
  | GetViewKeyRequest
  | DecryptRequest
  | SignRequest
  | VerifyRequest
  | GetBalanceRequest
  | GetRecordsRequest
  | SyncRecordsRequest;

type Method = AleoSnapRpcRequest["method"];

export interface WalletRequestSnapsRequest {
  method: "wallet_requestSnaps";
  params: object;
}

export interface GetSnapsRequest {
  method: "wallet_getSnaps";
}

export interface SnapRpcMethodRequest {
  method: string;
  params: AleoSnapRpcRequest;
}

export type MetamaskRpcRequest =
  | WalletRequestSnapsRequest
  | GetSnapsRequest
  | SnapRpcMethodRequest;

export interface AleoSnapApi {
  getAccount(): Promise<string>;
  getViewKey(): Promise<string>;
  decrypt(cipherText: string, viewKey?: string): Promise<string>;
  sign(message: string): Promise<Signature>;
  verify(message: string, signature: string): Promise<boolean>;
  getBalance(): Promise<Balance>;
  getRecords(): Promise<Records>;
  syncRecords(): Promise<null>;
}

export interface Record {
  value: string;
}
export interface Records {
  latestSyncBlock: number;
  records: Record[];
}

export interface Balance {
  latestSyncBlock: number;
  balance: string;
}
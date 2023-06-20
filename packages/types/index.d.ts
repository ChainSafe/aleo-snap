import { Signature } from "@chainsafe/aleo-snap-wasm";

export enum Methods {
  GetAccount = "aleo_getAccount",
  GetViewKey = "aleo_getViewKey",
  Decrypt = "aleo_decrypt",
  Sign = "aleo_sign",
  Verify = "aleo_verify",
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

export type AleoSnapRpcRequest =
  | GetAccountRequest
  | GetViewKeyRequest
  | DecryptRequest
  | SignRequest
  | VerifyRequest;

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
}

import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { InitOutput, initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { getAccount } from "./rpc/getAccount";
import { getViewKey } from "./rpc/getViewKey";

export enum Methods {
  GetAccount = "aleo_getAccount",
  GetViewKey = "aleo_getViewKey",
  Decrypt = "aleo_decrypt",
  Sign = "aleo_sign",
  Verify = "aleo_verify",
}

let wasm: InitOutput;

export const onRpcRequest: OnRpcRequestHandler = async ({
  request,
  origin,
}) => {
  if (!wasm) {
    wasm = await initializeWasm();
  }

  switch (request.method) {
    case Methods.GetAccount: {
      return getAccount(snap);
    }
    case Methods.GetViewKey: {
      return getViewKey(snap, origin);
    }
    default:
      throw new Error("Method not found.");
  }
};

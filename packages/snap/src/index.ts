import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { InitOutput, initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { assert } from "superstruct";
import { getAccount } from "./rpc/getAccount";
import { getViewKey } from "./rpc/getViewKey";
import { decrypt } from "./rpc/decrypt";
import { decryptSchema } from "./utils/params";

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
    case Methods.Decrypt: {
      assert(request.params, decryptSchema);
      return decrypt(snap, request.params);
    }
    default:
      throw new Error("Method not found.");
  }
};

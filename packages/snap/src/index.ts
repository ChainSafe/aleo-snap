import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { InitOutput, initializeWasm } from "aleo-snap-wasm";
import { getAccount } from "./rpc/getAccount";
<<<<<<< HEAD
import { getViewKey } from "./rpc/getViewKey";
=======
>>>>>>> 6499f26658f12900af35879fe93635b95d6abcaf

enum Methods {
  GetAccount = "aleo_getAccount",
  GetViewKey = "aleo_getViewKey",
  Decrypt = "aleo_decrypt",
  Sign = "aleo_sign",
  Verify = "aleo_verify",
}

let wasm: InitOutput;

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  if (!wasm) {
    wasm = await initializeWasm();
  }

  switch (request.method) {
    case Methods.GetAccount: {
      return getAccount(snap);
    }
    default:
      throw new Error("Method not found.");
  }
};

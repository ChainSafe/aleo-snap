import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { InitOutput, initializeWasm } from "aleo-snap-wasm";
import { getAccount } from "./rpc/getAccount";

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
  } else {
    console.log("initialized wasm");
  }

  switch (request.method) {
    case Methods.GetAccount: {
      return getAccount(snap);
    }
    default:
      throw new Error("Method not found.");
  }
};

import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { getAccount } from "./rpc/getAccount";
import { InitOutput, initializeWasm } from "aleo-snap-wasm";

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
      return getAccount();
    }
    default:
      throw new Error("Method not found.");
  }
};

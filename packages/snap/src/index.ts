import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { InitOutput, initializeWasm } from "aleo-snap-wasm";
import { assert } from "superstruct";
import { getAccount } from "./rpc/getAccount";
import { getViewKey } from "./rpc/getViewKey";
import { decryptRecord } from "./rpc/decryptRecord";
import { decryptRecordSchema } from "./utils/params";

enum Methods {
  GetAccount = "aleo_getAccount",
  GetViewKey = "aleo_getViewKey",
  DecryptRecord = "aleo_decrypt",
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
      return await getAccount(snap);
    }
    case Methods.GetViewKey: {
      return await getViewKey(snap);
    }
    case Methods.DecryptRecord: {
      assert(request.params, decryptRecordSchema);
      return decryptRecord(request.params);
    }
    default:
      throw new Error("Method not found.");
  }
};

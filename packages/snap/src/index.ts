import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { InitOutput, initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { getAccount } from "./rpc/getAccount";
import { getViewKey } from "./rpc/getViewKey";
import { decryptRecord } from "./rpc/decryptRecord";
import { assert } from "superstruct";
import { decryptRecordSchema } from "./utils/params";

enum Methods {
  GetAccount = "aleo_getAccount",
  GetViewKey = "aleo_getViewKey",
  DecryptRecord = "aleo_decryptRecord",
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
    case Methods.GetViewKey: {
      return getViewKey(snap);
    }
    case Methods.DecryptRecord: {
      assert(request.params, decryptRecordSchema);
      return decryptRecord(snap, request.params);
    }
    default:
      throw new Error("Method not found.");
  }
};

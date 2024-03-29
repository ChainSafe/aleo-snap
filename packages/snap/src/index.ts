import { OnRpcRequestHandler, OnCronjobHandler } from "@metamask/snaps-types";
import { InitOutput, initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { Methods } from "@chainsafe/aleo-snap-shared";
import { assert } from "./utils/assert";
import { getAccount } from "./rpc/getAccount";
import { getViewKey } from "./rpc/getViewKey";
import { decryptSchema, signSchema, verifySchema } from "./utils/params";
import { sign } from "./rpc/sign";
import { decrypt } from "./rpc/decrypt";
import { verify } from "./rpc/verify";
import { syncRecords } from "./cron/syncRecords";
import { getRecords } from "./rpc/getRecords";
import { getBalance } from "./rpc/getBalance";
import { getPrivateKey } from "./rpc/getPrivateKey";

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
      return await getAccount(snap);
    }
    case Methods.GetViewKey: {
      return await getViewKey(snap, origin);
    }
    case Methods.GetPrivateKey: {
      return await getPrivateKey(snap, origin);
    }
    case Methods.Decrypt: {
      assert(request.params, decryptSchema);
      return decrypt(snap, request.params);
    }
    case Methods.Sign: {
      assert(request.params, signSchema);
      return sign(snap, origin, request.params.message);
    }
    case Methods.Verify: {
      assert(request.params, verifySchema);
      return verify(snap, request.params);
    }
    //
    case Methods.GetBalance: {
      return getBalance(snap, origin);
    }
    case Methods.GetRecords: {
      return getRecords(snap, origin);
    }
    default:
      throw new Error("Method not found.");
  }
};

export const onCronjob: OnCronjobHandler = async ({ request }) => {
  if (!wasm) {
    wasm = await initializeWasm();
  }

  switch (request.method) {
    case Methods.SyncRecords:
      return syncRecords(snap);

    default:
      throw new Error("Method not found.");
  }
};

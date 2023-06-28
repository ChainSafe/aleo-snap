import {
  Balance,
  Methods,
  Records,
  Signature,
} from "@chainsafe/aleo-snap-shared";
import { AleoSnap } from "./snap";

async function sendSnapMethod<T>(
  request: { method: string; params?: unknown },
  snapId: string
): Promise<T> {
  return await window.ethereum.request({
    method: "wallet_invokeSnap",
    params: {
      request,
      snapId,
    },
  });
}

export async function getAccount(this: AleoSnap): Promise<string> {
  return await sendSnapMethod({ method: Methods.GetAccount }, this.snapId);
}

export async function getViewKey(this: AleoSnap): Promise<string> {
  return await sendSnapMethod({ method: Methods.GetViewKey }, this.snapId);
}

export async function decrypt(
  this: AleoSnap,
  cipherText: string,
  viewKey?: string
): Promise<string> {
  return await sendSnapMethod(
    {
      method: Methods.Decrypt,
      params: {
        viewKey,
        cipherText,
      },
    },
    this.snapId
  );
}

export async function sign(
  this: AleoSnap,
  message: string
): Promise<Signature> {
  return await sendSnapMethod(
    {
      method: Methods.Sign,
      params: {
        message,
      },
    },
    this.snapId
  );
}

export async function verify(
  this: AleoSnap,
  message: string,
  signature: string
): Promise<boolean> {
  return await sendSnapMethod(
    {
      method: Methods.Verify,
      params: {
        message,
        signature,
      },
    },
    this.snapId
  );
}

export async function syncRecords(this: AleoSnap): Promise<null> {
  return await sendSnapMethod({ method: Methods.SyncRecords }, this.snapId);
}

export async function getBalance(this: AleoSnap): Promise<Balance> {
  return await sendSnapMethod({ method: Methods.GetBalance }, this.snapId);
}

export async function getRecords(this: AleoSnap): Promise<Records> {
  return await sendSnapMethod({ method: Methods.GetRecords }, this.snapId);
}

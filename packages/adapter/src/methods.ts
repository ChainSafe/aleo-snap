import { Signature } from "@chainsafe/aleo-snap-wasm";
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
  return await sendSnapMethod({ method: "aleo_getAccount" }, this.snapId);
}

export async function getViewKey(this: AleoSnap): Promise<string> {
  return await sendSnapMethod({ method: "aleo_getViewKey" }, this.snapId);
}

export async function decrypt(
  this: AleoSnap,
  cipherText: string,
  viewKey?: string
): Promise<string> {
  return await sendSnapMethod(
    {
      method: "aleo_decrypt",
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
      method: "aleo_sign",
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
      method: "aleo_verify",
      params: {
        message,
        signature,
      },
    },
    this.snapId
  );
}

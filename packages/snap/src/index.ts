import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { getAccount } from "./rpc/getAccount";

 enum Methods {
  GetAccount = "aleo_getAccount",
  GetViewKey = "aleo_getViewKey",
  Decrypt = "aleo_decrypt",
  Sign = "aleo_sign",
  Verify = "aleo_verify",
}

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  
  switch (request.method) {
    case Methods.GetAccount:
      return getAccount();
    default:
      throw new Error("Method not found.");
  }
};

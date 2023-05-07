import { OnRpcRequestHandler } from "@metamask/snaps-types";

export enum Methods {
  GetAddress = "aleo_getAddress",
}

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  switch (request.method) {
    case Methods.GetAddress:
      return await new Promise((resolve) => {
        resolve(null);
      });
    default:
      throw new Error("Method not found.");
  }
};

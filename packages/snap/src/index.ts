import { OnRpcRequestHandler } from "@metamask/snaps-types";

// @ts-ignore
import wasmInit, { InitOutput, PrivateKey } from "aleo-snap-wasm";

let wasm: InitOutput;

const initializeWasm = async (): Promise<void> => {
  console.log("initializeWasm v4");
  try {
    const wasmFile = await fetch(
      "http://localhost:8081/build/aleo_wasm_bg.wasm"
    ).then((r) => r.arrayBuffer());
    console.warn(wasmFile);
    const wmodule = WebAssembly.compile(wasmFile);
    console.log(wmodule);
    wasm = await wasmInit(wmodule);

    console.log(PrivateKey.from_string("asasasasas"));
    console.log(wasm);
  } catch (error) {
    console.error("Failed to initialize WebAssembly module.", error);
    throw error;
  }
};

enum Methods {
  GetAccount = "aleo_getAccount",
  GetViewKey = "aleo_getViewKey",
  Decrypt = "aleo_decrypt",
  Sign = "aleo_sign",
  Verify = "aleo_verify",
}

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  if (!wasm) {
    await initializeWasm();
  } else {
    console.log("initialized wasm");
  }

  switch (request.method) {
    case "ping": {
      console.warn(wasm);
      return "pong";
    }
    default:
      throw new Error("Method not found.");
  }
};

import init, { InitOutput } from "./wasmBuild/aleo_wasm";
import { wasm } from "./wasm";

export const initializeWasm = async (): Promise<InitOutput> => {
  try {
    const binary = Uint8Array.from(atob(wasm), c => c.charCodeAt(0))
    const wasmModule = await WebAssembly.compile(binary);
    return await init(wasmModule);
  } catch (error) {
    console.error("Failed to initialize WebAssembly module.", error);
    throw error;
  }
};

// re-export all other methods
export * from "./wasmBuild/aleo_wasm";

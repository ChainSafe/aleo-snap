import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// require.resolve('module');
const wasmPath = "src/wasmBuild/aleo_wasm_bg.wasm";

const createFileString = (array: string): string =>
`// Pre generated file please do not edit
export const wasm = "${array}";
`;

(async function() {
  const wasmBuffer = readFileSync(resolve(wasmPath), { encoding: "base64" });
  writeFileSync(resolve("src/wasm.ts"), createFileString(wasmBuffer));
})();

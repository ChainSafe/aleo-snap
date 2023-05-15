import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const wasmPath = require.resolve('@aleohq/wasm/aleo_bg.wasm');

const createFileString = (array: string): string =>
`// Pre generated file please do not edit
export const wasm = "${array}";
`;

(async function() {
  console.log("Stringify wasm file from:", wasmPath);
  const wasmBuffer = readFileSync(wasmPath, { encoding: "base64" });

  const destination = resolve("src/wasm.ts");
  console.log("Storing file to location:", destination);
  writeFileSync(destination, createFileString(wasmBuffer));

  console.log("\nFile stored 👌");
})();

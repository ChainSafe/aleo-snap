# need name!

tldr. Point of this library is to simplify usages of `@ale/wasm` inside snap's.

keynotes:
 * transform `.wasm` file to `base64` string stored in file
 * transpile `wasm-pack` web bindings to `umd` `es2015` for usages in `snap`
 * provide simple method for initializing `wasm`
 * it is Network-Independent

## Requirements

> Yarn 3.x

> Node 18 or above

## Usages

Install packages
```shell
yarn install
```

build `wasm.ts`
```shell
yarn stringify:wasm
```

build project
```shell
yarn build:bundle
```

copy type definitions from `./src/wasmBuild` to `./lib/wasmBuild`  
and now is ready to be used with snap

### Example
```typescript
import { OnRpcRequestHandler } from "@metamask/snaps-types";
import { initializeWasm, InitOutput, PrivateKey } from "aleo-snap-wasm";

let wasm: InitOutput;

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  if (!wasm) wasm = await initializeWasm();

  switch (request.method) {
    case "privateKey": {
      return PrivateKey.from_seed_unchecked(request.params.seed);
    }
    default:
      throw new Error("Method not found.");
  }
};
```

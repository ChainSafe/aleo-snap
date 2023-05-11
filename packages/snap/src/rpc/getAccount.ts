// const fs = require('fs');
// let wasm: WebAssembly.WebAssemblyInstantiatedSource;

export const getAccount = async () => {
  const node = (await snap.request({
    method: `snap_getBip44Entropy`,
    params: {
      coinType: 1,
    },
  }))
  console.log(node)

  // const wasmBuffer = fs.readFileSync(`${__dirname}/../dist/aleo_bg.wasm`);
  // console.log(wasmBuffer);
  // wasm = await WebAssembly.instantiate(wasmBuffer);
  // console.log(wasm);

  // await fetch("https://cdn.jsdelivr.net/npm/@aleohq/wasm@0.4.1/aleo_bg.wasm")
  //   .then((response) => {
  //     console.log("response");
  //     console.log(response);
  //     return response.arrayBuffer()
  //   })
  //   .then((bytes) => {
  //     console.log("bytes");
  //     console.log(bytes);
  //     return WebAssembly.instantiate(bytes, {})
  //   })
  //   .then((results) => {
  //     console.log("results")
  //     console.log(results)
  //   }).catch(console.error);
  // console.log("after wasm");

  // await WebAssembly.instantiateStreaming(fetch("https://cdn.jsdelivr.net/npm/@aleohq/wasm@0.4.1/aleo_bg.wasm"), {}).then(
  //   (results) => {
  //     console.log("results")
  //     console.log(results)
  //   }
  // ).catch(console.error);
  //   console.log("after wasm")

  return 2;
}
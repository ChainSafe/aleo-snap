import { MetaMaskInpageProvider } from "@metamask/providers";
import { InitInput } from "@chainsafe/aleo-snap-wasm";
import { SinonSandbox, SinonStubbedInstance } from "sinon";

declare global {
  namespace globalThis {
    var wasm: InitInput
  }
}

export const mockSnapProvider = (
  sandbox: SinonSandbox
): SinonStubbedInstance<MetaMaskInpageProvider> & MetaMaskInpageProvider =>
  sandbox.createStubInstance(
    MetaMaskInpageProvider
  ) as SinonStubbedInstance<MetaMaskInpageProvider> & MetaMaskInpageProvider;

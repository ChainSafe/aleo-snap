import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { mockSnapProvider } from "../rpc/wallet.stub";
import { getPrivateKey } from "../../../src/aleo/account";
import { bip44Entropy1Node } from "./bip44Entropy.mock";

chai.use(sinonChai);

describe("Test helper function: getPrivateKey", function () {
  const sanbox = sinon.createSandbox();
  const snapStub = mockSnapProvider(sanbox);

  before(async function () {
    global.wasm = await initializeWasm();
  });

  afterEach(function () {
    sanbox.reset();
  });

  it("should return aleo address", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);

    const account = await getPrivateKey(snapStub);

    expect(account.to_string()).to.be.eql(
      "APrivateKey1zkp5QwXmPphbTQ7PE2gvRiKbXs8gJ8oLYhQLqZNkWsd7iEj"
    );
  });
});

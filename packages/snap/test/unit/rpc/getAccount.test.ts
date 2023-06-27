import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { getAccount } from "../../../src/rpc/getAccount";
import { bip44Entropy1Node } from "../aleo/bip44Entropy.mock";
import { mockSnapProvider } from "./wallet.stub";

chai.use(sinonChai);

describe("Test rpc handler function: getAccount", function () {
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

    const account = await getAccount(snapStub);

    expect(account).to.be.eql(
      "aleo1j2mxy4kp3snsrzhs95dlar6eyekerg62h4yetw93eufw76u8qq9q7ar5qz"
    );
  });
});

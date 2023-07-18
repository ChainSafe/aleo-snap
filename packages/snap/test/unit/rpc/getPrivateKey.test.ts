import { expect, use } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import chaiAsPromised from "chai-as-promised";
import { initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { bip44Entropy1Node } from "../aleo/bip44Entropy.mock";
import { mockSnapProvider } from "./wallet.stub";
import { getPrivateKey } from "../../../src/rpc/getPrivateKey";

use(sinonChai);
use(chaiAsPromised);

describe("Test rpc handler function: getPrivateKey", function () {
  const sanbox = sinon.createSandbox();
  const snapStub = mockSnapProvider(sanbox);

  before(async function () {
    global.wasm = await initializeWasm();
  });

  afterEach(function () {
    sanbox.reset();
  });

  it("should return aleo privateKey after positive confirmation", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_dialog"))
      .resolves(true);

    const account = await getPrivateKey(snapStub, "https://fake.com");

    expect(account).to.be.eql(
      "APrivateKey1zkp5QwXmPphbTQ7PE2gvRiKbXs8gJ8oLYhQLqZNkWsd7iEj"
    );
  });

  it("should not return aleo privateKey after negative confirmation", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_dialog"))
      .resolves(false);

    await expect(getPrivateKey(snapStub, "https://fake.com")).to.be.rejectedWith(
      "User decline request"
    );
  });
});

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import chaiAsPromised from "chai-as-promised";
import { initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { sign } from "../../../src/rpc/sign";
import { mockSnapProvider } from "./wallet.stub";
import { bip44Entropy1Node } from "../aleo/bip44Entropy.mock";

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe("Test rpc handler function: sign", function () {
  const sanbox = sinon.createSandbox();
  const snapStub = mockSnapProvider(sanbox);

  before(async function () {
    global.wasm = await initializeWasm();
  });

  afterEach(function () {
    sanbox.reset();
  });

  it("should succesfuly sign message", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);

    snapStub.request
      .withArgs(sinon.match.has("method", "snap_dialog"))
      .resolves(true);

    const signResponse = await sign(
      snapStub,
      "https://fake.com",
      "Hello world!"
    );

    expect(signResponse.length).to.be.eql(216);
    expect(signResponse.slice(0, 4)).to.be.eql("sign");
  });

  it("should fail if dialog wasn't accepted", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);

    await expect(
      sign(
        snapStub,
        "https://fake.com",
        "Hello world!"
      )
    ).to.rejectedWith("Transaction not confirmed");

  });
});

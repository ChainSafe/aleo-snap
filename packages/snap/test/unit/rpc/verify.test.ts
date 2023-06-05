import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import chaiAsPromised from "chai-as-promised";
import { initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { sign } from "../../../src/rpc/sign";
import { verify } from "../../../src/rpc/verify";
import { mockSnapProvider } from "./wallet.stub";
import { bip44Entropy1Node } from "../aleo/bip44Entropy.mock";

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe("Test rpc handler function: verify", function () {
  const sanbox = sinon.createSandbox();
  const snapStub = mockSnapProvider(sanbox);

  before(async function () {
    global.wasm = await initializeWasm();
  });

  afterEach(function () {
    sanbox.reset();
  });

  it("should succesfuly verify signed message", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);

    const signature = "sign1l4tgm3pdmrqxx9gtz3etp0x9crg6lvtk00980egxdlln7te9qqqnfj7g6zft0ma6f9suj3trwaydhhqt4mhd7zmpxz3ap7jhmnaa6q4g73h4v52d44n48d96eljqhtd2608f3su43qsz40wjelvpwfrwqdxyl7qkskdmghqr6etfu68jshkrlvt5z6hsujg53l927azv5qyssnmcsw9"


    const verifyResponse = await verify(snapStub, { signature, message: "Message to verify" });
    expect(verifyResponse).to.be.true;
  });

  it("should fail on wrong signature", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);


    await expect(
      verify(
        snapStub,
        { signature: "notaValidSignature", message: "Message to verify" }
      )
    ).to.rejectedWith("unreachable");

  });
});

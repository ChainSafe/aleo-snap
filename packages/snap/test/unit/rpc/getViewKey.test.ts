import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { bip44Entropy1Node } from "../aleo/bip44Entropy.mock";
import { getViewKey } from "../../../src/rpc/getViewKey";
import { mockSnapProvider } from "./wallet.stub";

chai.use(sinonChai);

describe("Test rpc handler function: getViewKey", function () {
  const sanbox = sinon.createSandbox();
  const snapStub = mockSnapProvider(sanbox);

  before(async function () {
    global.wasm = await initializeWasm();
  });

  afterEach(function () {
    sanbox.reset();
  });

  it("should return aleo viewKey", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_dialog"))
      .resolves(true);

    const account = await getViewKey(snapStub, "https://fake.com");

    expect(account).to.be.eql(
      "AViewKey1icf4Y5hujfpeLBpxfMSX2V8UGNVJ9pUa4m5SQd1HkWy5"
    );
  });
});

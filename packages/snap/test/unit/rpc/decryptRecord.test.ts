import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { decryptRecord } from "../../../src/rpc/decryptRecord";
import { mockSnapProvider } from "./wallet.stub";
import { bip44Entropy1Node } from "../aleo/bip44Entropy.mock";

chai.use(sinonChai);

describe("Test rpc handler function: decryptRecord", function () {
  const sanbox = sinon.createSandbox();
  const snapStub = mockSnapProvider(sanbox);

  before(async function () {
    global.wasm = await initializeWasm();
  });

  afterEach(function () {
    sanbox.reset();
  });

  it("should return decrypted record with matching cipherText-viewKey", async function () {
    snapStub.request
      .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
      .resolves(bip44Entropy1Node);

    const record = await decryptRecord(
      snapStub,
      {
        cipherText: "record1qyqsqpe2szk2wwwq56akkwx586hkndl3r8vzdwve32lm7elvphh37rsyqyxx66trwfhkxun9v35hguerqqpqzqrtjzeu6vah9x2me2exkgege824sd8x2379scspmrmtvczs0d93qttl7y92ga0k0rsexu409hu3vlehe3yxjhmey3frh2z5pxm5cmxsv4un97q",
        viewKey: "AViewKey1ccEt8A2Ryva5rxnKcAbn7wgTaTsb79tzkKHFpeKsm9NX"
      }
    );

    expect(record).to.be.eql("{\n  owner: aleo1j7qxyunfldj2lp8hsvy7mw5k8zaqgjfyr72x2gh3x4ewgae8v5gscf5jh3.private,\n  microcredits: 1500000000000000u64.private,\n  _nonce: 3077450429259593211617823051143573281856129402760267155982965992208217472983group.public\n}");
  });

  it("should throw error on wrong cipherText/viewKey ", async function () {
    snapStub.request
    .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
    .resolves(bip44Entropy1Node);

    await expect(decryptRecord(
      snapStub,
      {
        cipherText: "record1qyqsqpe2szk2wwwq56akkwx586hkndl3r8vzdwve32lm7elvphh37rsyqyxx66trwfhkxun9v35hguerqqpqzqrtjzeu6vah9x2me2exkgege824sd8x2379scspmrmtvczs0d93qttl7y92ga0k0rsexu409hu3vlehe3yxjhmey3frh2z5pxm5cmxsv4un97q",
      }
    )).to.be.rejectedWith("Decryption failed - view key did not match record");
  });
});
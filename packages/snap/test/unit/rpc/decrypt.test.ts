import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { initializeWasm } from "@chainsafe/aleo-snap-wasm";
import { decrypt } from "../../../src/rpc/decrypt";
import { mockSnapProvider } from "./wallet.stub";
import { bip44Entropy1Node } from "../aleo/bip44Entropy.mock";
import { getAccount } from "../../../src/rpc/getAccount";

chai.use(sinonChai);

describe("Test rpc handler function: decrypt", function () {
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

    const record = await decrypt(
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

    await expect(decrypt(
      snapStub,
      {
        cipherText: "record1qyqsqpe2szk2wwwq56akkwx586hkndl3r8vzdwve32lm7elvphh37rsyqyxx66trwfhkxun9v35hguerqqpqzqrtjzeu6vah9x2me2exkgege824sd8x2379scspmrmtvczs0d93qttl7y92ga0k0rsexu409hu3vlehe3yxjhmey3frh2z5pxm5cmxsv4un97q",
      }
    )).to.be.rejectedWith("Decryption failed - view key did not match record");
  });

  it("should return decrypted record only with cipherthext if owner is user", async function () {
    snapStub.request
    .withArgs(sinon.match.has("method", "snap_getBip44Entropy"))
    .resolves(bip44Entropy1Node);

    const record = await decrypt(
      snapStub,
      {
        cipherText: "record1qyqspcvr3q75x5klxaa88ysjcpx36gz0zalsx7hjn5mtttqndcffxmgzqyxx66trwfhkxun9v35hguerqqpqzq83z5d5jpqwwhdglt05lnaq83dnnkfukg2upfwzywx849s5mkklqssure3s6926z2us892c84dqjm8qarn64z0pcqqw2l3t29jen4cs6c0qfnm",
      }
    );
    const account = "aleo1j2mxy4kp3snsrzhs95dlar6eyekerg62h4yetw93eufw76u8qq9q7ar5qz"
    expect(record.substring(11, account.length + 11)).to.be.eql(account);

    expect(record).to.be.eql("{\n  owner: aleo1j2mxy4kp3snsrzhs95dlar6eyekerg62h4yetw93eufw76u8qq9q7ar5qz.private,\n  microcredits: 50000000u64.private,\n  _nonce: 6080806725905813185393881582373108458266388201126403542594037621192938406177group.public\n}");
  });
});
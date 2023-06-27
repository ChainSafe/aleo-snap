import { expect, use } from "chai";
import sinonChai from "sinon-chai";
import chaiAsPromised from "chai-as-promised";
import { Dappeteer, DappeteerPage, initSnapEnv } from "@chainsafe/dappeteer";
import { buildSnap } from "./utils";
import { Methods } from "@chainsafe/aleo-snap-shared";

use(sinonChai);
use(chaiAsPromised);

const LOCAL_PREFUNDED_MNEMONIC =
  "affair medal agent oak train story talk cave search kiss radar boss" as const;
const AUTOMATION = "playwright" as const;

export const EXAMPLE_WEBSITE = "http://example.org" as const;

describe("Integration tests", function () {
  this.timeout(120000);

  let metaMask: Dappeteer;
  let testPage: DappeteerPage;
  let snapId: string;

  before(async function () {
    const builtSnapDir = await buildSnap();
    const environment = await initSnapEnv({
      seed: LOCAL_PREFUNDED_MNEMONIC,
      automation: AUTOMATION,
      metaMaskFlask: true,
      snapIdOrLocation: builtSnapDir,
    });

    testPage = await environment.browser.newPage();
    metaMask = environment.metaMask;
    snapId = environment.snapId;
    await testPage.goto(EXAMPLE_WEBSITE);
  });

  after(async function () {
    await testPage.browser().close();
  });

  describe("getAccount", function () {
    it("successfully retrieve public address ", async function () {
      const invokeAction = await metaMask.snaps.invokeSnap(
        testPage,
        snapId,
        Methods.GetAccount
      );

      expect(invokeAction).to.equal(
        "aleo1j2mxy4kp3snsrzhs95dlar6eyekerg62h4yetw93eufw76u8qq9q7ar5qz"
      );
    });
  });

  describe("getViewKey", function () {
    it("successfully retrieve view key on confirm", async function () {
      const invokeAction = metaMask.snaps.invokeSnap(
        testPage,
        snapId,
        Methods.GetViewKey
      );

      await metaMask.snaps.dialog.accept();

      expect(await invokeAction).to.equal(
        "AViewKey1icf4Y5hujfpeLBpxfMSX2V8UGNVJ9pUa4m5SQd1HkWy5"
      );
    });

    it("fail retrieve view key on decline", async function () {
      const expectPromise = expect(
        metaMask.snaps.invokeSnap(testPage, snapId, Methods.GetViewKey)
      ).to.be.rejectedWith("User decline request");

      await metaMask.snaps.dialog.reject();
      await expectPromise;
    });
  });

  describe("decrypt", function () {
    it("successfully decrypt", async function () {
      const invokeAction = await metaMask.snaps.invokeSnap(
        testPage,
        snapId,
        Methods.Decrypt,
        {
          cipherText: "record1qyqspcvr3q75x5klxaa88ysjcpx36gz0zalsx7hjn5mtttqndcffxmgzqyxx66trwfhkxun9v35hguerqqpqzq83z5d5jpqwwhdglt05lnaq83dnnkfukg2upfwzywx849s5mkklqssure3s6926z2us892c84dqjm8qarn64z0pcqqw2l3t29jen4cs6c0qfnm",
        }
      );

      expect(invokeAction).to.equal(
        "{\n  owner: aleo1j2mxy4kp3snsrzhs95dlar6eyekerg62h4yetw93eufw76u8qq9q7ar5qz.private,\n  microcredits: 50000000u64.private,\n  _nonce: 6080806725905813185393881582373108458266388201126403542594037621192938406177group.public\n}"
      );
    });
  });

  describe("sign", function () {
    it("successfully sign", async function () {
      const invokeAction = metaMask.snaps.invokeSnap(
        testPage,
        snapId,
        Methods.Sign,
        { message: "Hello world!" }
      );

      await metaMask.snaps.dialog.accept();

      expect(await invokeAction).to.deep.eq(
        { ptr: 1237968 }
      );
    });

    it("fail sign on user decline", async function () {
      const expectPromise = expect(
        metaMask.snaps.invokeSnap(testPage, snapId, Methods.Sign, { message: "Hello world!" })
      ).to.be.rejectedWith("Transaction not confirmed");

      await metaMask.snaps.dialog.reject();
      await expectPromise;
    });
  });

  describe("verify", function () {
    it("verify signature", async function () {
      const invokeAction = metaMask.snaps.invokeSnap(
        testPage,
        snapId,
        Methods.Verify,
        { 
          message: "Message to verify",  
          signature: "sign1l4tgm3pdmrqxx9gtz3etp0x9crg6lvtk00980egxdlln7te9qqqnfj7g6zft0ma6f9suj3trwaydhhqt4mhd7zmpxz3ap7jhmnaa6q4g73h4v52d44n48d96eljqhtd2608f3su43qsz40wjelvpwfrwqdxyl7qkskdmghqr6etfu68jshkrlvt5z6hsujg53l927azv5qyssnmcsw9"
        }
      );

      expect(await invokeAction).to.be.true;
    });
  });
});

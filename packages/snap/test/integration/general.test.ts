import { expect, use } from "chai";
import sinonChai from "sinon-chai";
import chaiAsPromised from "chai-as-promised";
import { Dappeteer, DappeteerPage, initSnapEnv } from "@chainsafe/dappeteer";
import { Methods } from "../../src";
import { buildSnap } from "./utils";

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
});

import { AleoSnapApi } from "@chainsafe/aleo-snap-shared";
import {
  getAccount,
  getViewKey,
  decrypt,
  sign,
  verify,
  syncRecords,
  getBalance,
  getRecords,
  getPrivateKey,
} from "./methods";

export class AleoSnap {
  protected readonly snapOrigin: string;
  protected readonly snapId: string;

  public constructor(snapOrigin: string) {
    this.snapOrigin = snapOrigin;
    this.snapId = this.snapOrigin;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public getAleoSnapApi = async (): Promise<AleoSnapApi> => {
    return {
      getAccount: getAccount.bind(this),
      getViewKey: getViewKey.bind(this),
      getPrivateKey: getPrivateKey.bind(this),
      decrypt: decrypt.bind(this),
      sign: sign.bind(this),
      verify: verify.bind(this),
      syncRecords: syncRecords.bind(this),
      getBalance: getBalance.bind(this),
      getRecords: getRecords.bind(this),
    };
  };
}

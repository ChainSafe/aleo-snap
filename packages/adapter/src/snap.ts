import { AleoSnapApi } from "@chainsafe/aleo-snap-types";
import { getAccount, getViewKey, decrypt, sign, verify } from "./methods";

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
      decrypt: decrypt.bind(this),
      sign: sign.bind(this),
      verify: verify.bind(this),
    };
  };
}

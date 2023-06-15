import { SignMessage } from '../../components/SignMessage';
import { VerifyMessage } from '../../components/VerifyMessage';
import { AccountInfo } from '../../components/AccountInfo/AccountInfo.tsx';

export function Account(): JSX.Element {
  return (
    <>
      <AccountInfo />
      <br />
      <SignMessage />
      <br />
      <VerifyMessage />
    </>
  );
}

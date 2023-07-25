import { GetRecords } from '../../components/GetRecords';
import { TransferFunds } from '../../components/TransferFunds';

export function Transfer(): JSX.Element {
  return (
    <>
      <TransferFunds />
      <GetRecords />
    </>
  );
}

import { Outlet } from 'react-router-dom';
import { useWasm } from '../../hooks/useWasm.ts';
import { useAccountRecords } from '../../hooks/useAccountRecords.ts';

export function Root(): JSX.Element {
  const isReady = useWasm();
  const r = useAccountRecords();

  console.log(r);

  if (!isReady) return <div />;

  /*if (false) {
    return <h1>Fail</h1>;
    // return <Navigate to="/connect" replace={true} />;
  }*/

  return <Outlet />;
}

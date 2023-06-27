import { Outlet } from 'react-router-dom';
import { useWasm } from '../../hooks/useWasm.ts';

export function Root(): JSX.Element {
  const isReady = useWasm();

  if (!isReady) return <div />;

  /*if (false) {
    return <h1>Fail</h1>;
    // return <Navigate to="/connect" replace={true} />;
  }*/

  return <Outlet />;
}

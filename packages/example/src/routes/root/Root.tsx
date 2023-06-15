import { Outlet } from 'react-router-dom';

export function Root(): JSX.Element {
  // const location = useLocation();

  /*if (false) {
    return <h1>Fail</h1>;
    // return <Navigate to="/connect" replace={true} />;
  }*/

  return <Outlet />;
}

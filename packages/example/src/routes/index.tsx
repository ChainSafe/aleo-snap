import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import { Account, Root } from './root';
import ErrorPage from './ErrorPage';
import { Transfer } from './root/Transfer.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Root />,
        children: [
          {
            index: true,
            element: <Navigate to="/account" replace={true} />,
          },
          {
            path: '/account',
            element: <Account />,
          },
          {
            path: '/transfer',
            element: <Transfer />,
          },
        ],
      },
    ],
  },
]);

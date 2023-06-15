import { useRouteError } from 'react-router-dom';

function getErrorMessage(error: unknown): string {
  if (typeof error === 'object' && error !== null) {
    if ('statusText' in error) return String(error.statusText);
    if ('message' in error) return String(error.message);
  }
  return 'Some strange error!';
}

export default function ErrorPage(): JSX.Element {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{getErrorMessage(error)}</i>
      </p>
    </div>
  );
}

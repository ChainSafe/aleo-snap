import { Button, Result, Spin } from 'antd';
import { FC, useEffect, useState } from 'react';
import { ISnap } from '../../hooks/useSnap';

interface IAddSnap {
  snap: ISnap;
}

export const AddSnap: FC<IAddSnap> = ({ snap }) => {
  const [initialSpinner, setInitialSpinner] = useState(true);

  //initial spinner for better UX while isMetaMaskFlaskAvailable function promise race finishes
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      return await new Promise<void>(() =>
        setTimeout(() => {
          setInitialSpinner(false);
          return;
        }, 1000),
      );
    })();
  }, []);

  return (
    <div>
      <h1>Aleo snap</h1>
      <Spin spinning={initialSpinner} />
      {!snap.isMetaMaskFlask && !initialSpinner && (
        <Result status="warning" title="Metamask Flask not installed" />
      )}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Button disabled={!snap.isMetaMaskFlask} onClick={snap.enable}>
        Add Snap
      </Button>
    </div>
  );
};

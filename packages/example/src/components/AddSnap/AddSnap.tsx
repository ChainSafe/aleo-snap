import { Button, Result } from 'antd';
import { FC } from 'react';
import { ISnap } from '../../hooks/useSnap';

interface IAddSnap {
  snap: ISnap;
}

export const AddSnap: FC<IAddSnap> = ({ snap }) => {
  return (
    <div>
      <h1>Aleo snap</h1>
      {!snap.isMetaMaskFlask && snap.checksCompleted && (
        <Result status="warning" title="Metamask Flask not installed" />
      )}
      <Button disabled={!snap.isMetaMaskFlask} onClick={() => void snap.enable()}>
        Add Snap
      </Button>
    </div>
  );
};

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
      {!snap.isMetaMask && snap.checksCompleted && (
        <Result status="warning" title="Metamask not installed" />
      )}
      <Button disabled={!snap.isMetaMask} onClick={() => void snap.enable()}>
        Add Snap
      </Button>
    </div>
  );
};

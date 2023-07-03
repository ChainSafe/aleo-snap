import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import { useWasm } from '../../hooks/useWasm.ts';
import { AddSnap } from '../../components/AddSnap/AddSnap.tsx';
import { useSnap } from '../../hooks/useSnap.ts';

export function Root(): JSX.Element {
  const isWasmReady = useWasm();
  const snap = useSnap();

  if (!isWasmReady) {
    return <Spin />;
  }

  if (!snap.snapInstalled) {
    return <AddSnap snap={snap} />;
  }

  return <Outlet />;
}

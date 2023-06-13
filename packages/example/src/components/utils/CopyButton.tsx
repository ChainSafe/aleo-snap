import { useState } from 'react';
import copyToClipboard from 'copy-to-clipboard';
import { CheckCircleOutlined, CopyOutlined } from '@ant-design/icons';

interface Props {
  data: string;
}

// source: https://github.com/AleoHQ/sdk/blob/testnet3/website/src/components/CopyButton.js
export function CopyButton(props: Props): JSX.Element {
  const [copySuccess, setCopySuccess] = useState(false);

  const copy = (): void => {
    copyToClipboard(props.data);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Switch back to `copy` icon after 2 seconds.
  };

  if (copySuccess) {
    return <CheckCircleOutlined onClick={copy} />;
  } else {
    return <CopyOutlined onClick={copy} />;
  }
}

import { Button, Card, Form, Input } from 'antd';
import { useState } from 'react';
import { CopyButton, formLayout } from '../utils';
import { useSnap } from '../../hooks/useSnap';

export function SignMessage(): JSX.Element {
  const { signMessage, signature } = useSnap();
  const [message, setMessage] = useState('');

  return (
    <Card
      title="Sign a Message"
      style={{ width: '100%', borderRadius: '20px' }}
      bordered={false}
    >
      <Form {...formLayout}>
        <Form.Item label="Message" colon={false}>
          <Input
            size="large"
            placeholder="Message to sign"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Signature" colon={false} style={{ marginBottom: 0 }}>
          <Form.Item style={{ display: 'inline-block', width: 'calc(100% - 88px)' }}>
            <Input
              size="large"
              value={signature}
              addonAfter={<CopyButton data={signature} />}
              disabled={!signature}
            />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block', width: '80px', margin: '0 0 0 8px' }}
          >
            <Button
              size="large"
              style={{ width: 80 }}
              onClick={() => void signMessage(message)}
            >
              Sign
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </Card>
  );
}

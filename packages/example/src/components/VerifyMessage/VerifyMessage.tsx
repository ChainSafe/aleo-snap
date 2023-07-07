import { Button, Card, Form, Input, message as antdMessage } from 'antd';
import { useEffect, useState } from 'react';
import { formLayout } from '../utils';
import { useSnap } from '../../hooks/useSnap';

export function VerifyMessage(): JSX.Element {
  const { verifyMessage, isMessageVerified } = useSnap();
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [messageApi, contextHolder] = antdMessage.useMessage();

  useEffect(() => {
    if (isMessageVerified === true) {
      void messageApi.success('Successfully verified');
    }
    if (isMessageVerified === false) {
      void messageApi.error('Unable to verify this message and signature');
    }
  }, [isMessageVerified]);

  return (
    <Card
      title="Verify a Message"
      style={{ width: '100%', borderRadius: '20px' }}
      bordered={false}
    >
      {contextHolder}
      <Form {...formLayout}>
        <Form.Item label="Message" colon={false}>
          <Input
            size="large"
            placeholder="Message to verify"
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
              placeholder="Signature to verify"
              value={signature}
              onChange={(e) => {
                setSignature(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block', width: '80px', margin: '0 0 0 8px' }}
          >
            <Button
              size="large"
              style={{ width: 80 }}
              onClick={() => void verifyMessage(message, signature)}
            >
              Verify
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </Card>
  );
}

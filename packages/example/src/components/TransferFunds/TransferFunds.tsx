import { Alert, Button, Card, Form, Input, message } from 'antd';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { formLayout } from '../utils';
import { useSnap } from '../../hooks/useSnap';
import { useTransfer } from '../../hooks/useTransfer';

export type TransferFormData = {
  recipientAddress: string;
  amount: number;
  amountRecord: string;
  fee: number;
  feeRecord: string;
  privateKey: string;
  peerUrl: string;
};

export function TransferFunds(): JSX.Element {
  const { showPrivateKey, privateKey } = useSnap();
  const { transfer, transferStatus, transactionID } = useTransfer();
  const [messageApi, contextHolder] = message.useMessage();

  const formHook = useForm<TransferFormData>({
    defaultValues: {
      peerUrl: 'https://vm.aleo.org/api',
    },
  });

  const onSubmit: SubmitHandler<TransferFormData> = (data) => {
    transfer(data);
  };

  const getInput = (fieldName: keyof TransferFormData): JSX.Element => (
    <Controller
      control={formHook.control}
      name={fieldName}
      render={({ field }) => <Input {...field} />}
    />
  );

  useEffect(() => {
    if (transferStatus.message) {
      void messageApi.open({
        content: transferStatus.message,
        duration: transferStatus.duration,
        type: transferStatus.status,
        key: transferStatus.message,
      });
    }
  }, [transferStatus]);

  useEffect(() => {
    if (privateKey) formHook.setValue('privateKey', privateKey);
  }, [privateKey]);

  return (
    <Card
      title="Transfer Funds"
      style={{ width: '100%', borderRadius: '20px', marginBottom: '20px' }}
      bordered={false}
    >
      {contextHolder}
      <Form
        {...formLayout}
        onSubmitCapture={() => void formHook.handleSubmit(onSubmit)()}
      >
        <Form.Item label="Recipient Address" colon={false}>
          {getInput('recipientAddress')}
        </Form.Item>
        <Form.Item label="Amount" colon={false}>
          {getInput('amount')}
        </Form.Item>
        <Form.Item label="Amount Record" colon={false}>
          {getInput('amountRecord')}
        </Form.Item>
        <Form.Item label="Fee" colon={false}>
          {getInput('fee')}
        </Form.Item>
        <Form.Item label="Fee Record" colon={false}>
          {getInput('feeRecord')}
        </Form.Item>
        <Form.Item label="Private key" colon={false} style={{ marginBottom: 0 }}>
          <Controller
            control={formHook.control}
            name={'privateKey'}
            render={({ field }) => (
              <>
                <Form.Item
                  style={{ display: 'inline-block', width: 'calc(100% - 158px)' }}
                >
                  <Input.Password
                    {...field}
                    size="large"
                    value={privateKey}
                    disabled={!privateKey}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
                <Form.Item
                  style={{ display: 'inline-block', width: '150px', margin: '0 0 0 8px' }}
                >
                  <Button
                    size="large"
                    style={{ width: 150 }}
                    onClick={() => void showPrivateKey()}
                  >
                    Get Private Key
                  </Button>
                </Form.Item>
              </>
            )}
          />
        </Form.Item>
        <Form.Item label="Peer URL" colon={false}>
          {getInput('peerUrl')}
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 3 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {transactionID && (
        <Alert message={`Transaction ID: ${transactionID}`} type="success" />
      )}
    </Card>
  );
}

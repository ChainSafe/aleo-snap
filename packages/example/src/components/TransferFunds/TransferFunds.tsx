import { Button, Card, Form, Input } from 'antd';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { formLayout } from '../utils';
import { ProgramManager, RecordPlaintext, PrivateKey, ProvingKey, VerifyingKey, Program } from "@chainsafe/aleo-snap-wasm/src/index.ts";
import { useSnap } from '../../hooks/useSnap';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

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
  const { showPrivateKey, privateKey, showRecords, records } = useSnap();

  const [submitData, setSubmitData] = useState<TransferFormData | null>(null);

  const formHook = useForm<TransferFormData>({
    defaultValues: {
      peerUrl: 'https://vm.aleo.org/api',
    },
  });


  const onSubmit: SubmitHandler<TransferFormData> = (data) => {
    console.log(data);
    setSubmitData(data);
  };

  const getInput = (fieldName: keyof TransferFormData): JSX.Element => (
    <Controller
      control={formHook.control}      name={fieldName}
      render={({ field }) => <Input {...field} />}
    />
  );

  const getFunctionKeys = async (proverUrl: any, verifierUrl: any) => {
    console.log('Downloading proving and verifying keys from: ', proverUrl, verifierUrl);
    let proofResponse = await fetch(proverUrl);
    console.log('Getting array buffer');
    let proofBuffer = await proofResponse.arrayBuffer();
    let verificationResponse = await fetch(verifierUrl);
    let verificationBuffer = await verificationResponse.arrayBuffer();
    console.log('Proving and verifying key binaries downloaded');
    console.log('Creating proving and verifying keys...');
    let provingKey = ProvingKey.fromBytes(new Uint8Array(proofBuffer));
    let verifyingKey = VerifyingKey.fromBytes(new Uint8Array(verificationBuffer));
    console.log('Proving and verifying keys created');
    return [provingKey, verifyingKey];
  };
  const TRANSFER_PRIVATE_PROVER_URL =
    'https://testnet3.parameters.aleo.org/transfer_private.prover.2a9a6f2';
  const TRANSFER_PRIVATE_VERIFIER_URL =
    'https://testnet3.parameters.aleo.org/transfer_private.verifier.3a59762';

  useEffect(() => {
    if(privateKey) formHook.setValue('privateKey', privateKey)
  }, [privateKey])

  useEffect(() => {
    (async () => {
      // await init();
      // await aleo.initThreadPool(10);

      const aleoProgramManager = new ProgramManager();
      console.log(submitData)
      //transfer

      if (!submitData) return;
      const {
        recipientAddress: recipient,
        amount: amountCredits,
        amountRecord,
        fee,
        feeRecord,
        privateKey,
        peerUrl: url,
      } = submitData;
      const transfer_type = "private";
      try {
        //validation of private transfer type worker.js line 257 - 278
        let transferPrivateProvingKey = null;
        let transferPrivateVerifyingKey = null;
        [transferPrivateProvingKey, transferPrivateVerifyingKey] =
          await getFunctionKeys(
            TRANSFER_PRIVATE_PROVER_URL,
            TRANSFER_PRIVATE_VERIFIER_URL,
          );
        if (!aleoProgramManager.keyExists('credits.aleo', 'transfer_private')) {
          aleoProgramManager.cacheKeypairInWasmMemory(
            Program.getCreditsProgram().toString(),
            'transfer_private',
            transferPrivateProvingKey,
            transferPrivateVerifyingKey,
          );
        }


        let transferTransaction = await aleoProgramManager.transfer(
          PrivateKey.from_string(privateKey),
          amountCredits,
          recipient,
          transfer_type,
          RecordPlaintext.fromString(amountRecord),
          fee,
          RecordPlaintext.fromString(feeRecord),
          url,
          true,
        );
        let transaction = transferTransaction.toString();
        console.log('Transaction: ', transaction);
      } catch (err) {
        console.log(err);
      }

    })();
  }, [submitData]);

  console.log(records);
  return (
    <Card
      title="Transfer Funds"
      style={{ width: '100%', borderRadius: '20px' }}
      bordered={false}
    >
      <Button
        size="large"
        style={{ width: 150 }}
        onClick={() => void showRecords()}
      >
        Get Records
      </Button>
      <Form {...formLayout} onSubmitCapture={formHook.handleSubmit(onSubmit)}>
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
            name={"privateKey"}
            render={({ field }) => <>
              <Form.Item style={{ display: 'inline-block', width: 'calc(100% - 158px)' }}>
                <Input.Password
                  {...field}
                  size="large"
                  value={privateKey}
                  // disabled={!privateKey}
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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
            </>}
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
    </Card>
  );
}

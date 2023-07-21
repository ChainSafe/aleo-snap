import { useCallback, useEffect, useState } from 'react';
import {
  ProgramManager,
  RecordPlaintext,
  PrivateKey,
  ProvingKey,
  VerifyingKey,
  Program,
} from '@chainsafe/aleo-snap-wasm/src/index.ts';
import { TransferFormData } from '../components/TransferFunds/TransferFunds';

const isInputEmpty = (obj: TransferFormData): boolean => {
  return Object.values(obj).some((x) => x === undefined);
};

const getFunctionKeys = async (
  proverUrl: string,
  verifierUrl: string,
): Promise<[ProvingKey, VerifyingKey]> => {
  console.log('Downloading proving and verifying keys from: ', proverUrl, verifierUrl);
  const proofResponse = await fetch(proverUrl);
  console.log('Getting array buffer');
  const proofBuffer = await proofResponse.arrayBuffer();
  const verificationResponse = await fetch(verifierUrl);
  const verificationBuffer = await verificationResponse.arrayBuffer();
  console.log('Proving and verifying key binaries downloaded');
  console.log('Creating proving and verifying keys...');
  const provingKey = ProvingKey.fromBytes(new Uint8Array(proofBuffer));
  const verifyingKey = VerifyingKey.fromBytes(new Uint8Array(verificationBuffer));
  console.log('Proving and verifying keys created');
  return [provingKey, verifyingKey];
};
const TRANSFER_PRIVATE_PROVER_URL =
  'https://testnet3.parameters.aleo.org/transfer_private.prover.2a9a6f2';
const TRANSFER_PRIVATE_VERIFIER_URL =
  'https://testnet3.parameters.aleo.org/transfer_private.verifier.3a59762';

enum TransferStatus {
  IDLE = 'info',
  PENDING = 'loading',
  SUCCESS = 'success',
  FAILURE = 'error',
}

export interface ITransfer {
  transfer: (formData: TransferFormData) => void;
  transferStatus: { status: TransferStatus; message?: string; duration?: number };
  transactionID: string;
}

export function useTransfer(): ITransfer {
  const [formData, setFormData] = useState<TransferFormData | null>(null);
  const [transferStatus, setTransferStatus] = useState<{
    status: TransferStatus;
    message?: string;
    duration?: number;
  }>({ status: TransferStatus.IDLE });
  const [transactionID, setTransactionID] = useState<string>('');

  const transfer = useCallback(
    (formData: TransferFormData) => {
      setFormData(formData);
    },
    [formData],
  );

  useEffect(() => {
    if (!formData) return;
    void (async () => {
      const aleoProgramManager = new ProgramManager();
      console.log(formData);

      if (isInputEmpty(formData)) {
        setTransferStatus({
          status: TransferStatus.IDLE,
          message: 'Missing input data',
          duration: 2,
        });
        return;
      }
      setTransferStatus({
        status: TransferStatus.PENDING,
        message: 'Transaction in progress...',
      });
      const {
        recipientAddress: recipient,
        amount: amountCredits,
        amountRecord,
        fee,
        feeRecord,
        privateKey,
        peerUrl: url,
      } = formData;
      const transfer_type = 'private';
      try {
        let transferPrivateProvingKey = null;
        let transferPrivateVerifyingKey = null;
        [transferPrivateProvingKey, transferPrivateVerifyingKey] = await getFunctionKeys(
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

        const transferTransaction = await aleoProgramManager.transfer(
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
        const transactionID = transferTransaction.transactionId();
        setTransferStatus({
          status: TransferStatus.SUCCESS,
          message: `Transaction successful! Transaction ID: ${transactionID}`,
          duration: 5,
        });
        setTransactionID(transactionID);
        console.log('Transaction: ', transferTransaction);
      } catch (err) {
        console.log(err);
        setTransferStatus({
          status: TransferStatus.FAILURE,
          message: `Transaction failed! ${err as string}`,
          duration: 5,
        });
      }
    })();
  }, [formData]);

  return {
    transfer,
    transferStatus: {
      status: transferStatus.status,
      message: transferStatus.message,
      duration: transferStatus.duration,
    },
    transactionID,
  };
}

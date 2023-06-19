import {
  ViewKey,
  RecordCiphertext,
  RecordPlaintext,
} from '@chainsafe/aleo-snap-wasm/src/wasmBuild/aleo_wasm';
import { Block } from '@aleohq/sdk';

// similar to findUnspentRecords from https://github.com/AleoHQ/sdk/blob/bfd4b9768ac83872cd0f1c6a81cdac66a3525803/sdk/src/aleo_network_client.ts#LL237C9-L237C27
export function processRecord(viewKey: ViewKey) {
  return function (blocks: Block[]) {
    const records: RecordPlaintext[] = [];
    blocks.forEach(({ transactions: confirmedTransactions }) => {
      if (!confirmedTransactions) return;
      confirmedTransactions.forEach(({ type, transaction: { execution } }) => {
        if (type !== 'execute' || !execution || !execution.transitions) return;

        execution.transitions.forEach((transition) => {
          if (transition.program !== 'credits.aleo' || !transition.outputs) return;

          transition.outputs.forEach(({ type, value }) => {
            if (type !== 'record') return;
            console.log(value);
            const record = RecordCiphertext.fromString(value);
            console.log(record.isOwner(viewKey));
            if (record.isOwner(viewKey)) {
              console.log("im owner");
              const recordPlaintext = record.decrypt(viewKey);
              records.push(recordPlaintext);
            }
          });
        });
      });
    });
    return records;
  };
}

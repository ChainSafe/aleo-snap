import { ViewKey, RecordCiphertext } from "@chainsafe/aleo-snap-wasm";
import type { Block } from "@aleohq/sdk";

// similar to findUnspentRecords from https://github.com/AleoHQ/sdk/blob/bfd4b9768ac83872cd0f1c6a81cdac66a3525803/sdk/src/aleo_network_client.ts#LL237C9-L237C27
export function filterCreditsRecords(viewKey: ViewKey) {
  return function (blocks: Block[]) {
    const records: RecordCiphertext[] = [];
    blocks.forEach(({ transactions: confirmedTransactions }) => {
      if (!confirmedTransactions) return;
      confirmedTransactions.forEach(({ type, transaction: { execution } }) => {
        if (type !== "execute" || !execution || !execution.transitions) return;

        execution.transitions.forEach((transition) => {
          if (transition.program !== "credits.aleo" || !transition.outputs)
            return;

          transition.outputs.forEach(({ type, value }) => {
            if (type !== "record") return;
            const record = RecordCiphertext.fromString(value);
            if (record.isOwner(viewKey)) records.push(record);
          });
        });
      });
    });
    return records;
  };
}

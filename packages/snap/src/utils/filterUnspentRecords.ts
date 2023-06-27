import {
  PrivateKey,
  RecordCiphertext,
  ViewKey,
} from "@chainsafe/aleo-snap-wasm/src";
import { getTransitionId } from "../services/node";

export async function filterUnspentRecords(
  viewKey: ViewKey,
  privateKey: PrivateKey,
  records: RecordCiphertext[]
): Promise<RecordCiphertext[]> {
  const all = await Promise.all(
    records.map(async (record) => {
      const decrypted = record.decrypt(viewKey);
      const id = decrypted.serialNumberString(
        privateKey,
        "credits.aleo",
        "credits"
      );
      try {
        await getTransitionId(id);
      } catch {
        return record;
      }
      return false;
    })
  );

  return all.filter(Boolean) as RecordCiphertext[];
}

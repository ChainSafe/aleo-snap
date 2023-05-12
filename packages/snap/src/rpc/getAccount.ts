import { Address } from "aleo-snap-wasm";
import { getPrivateKey } from "../aleo/account";

export const getAccount = async () => {
  const privateKey = await getPrivateKey();
  return Address.from_private_key(privateKey).to_string();
}
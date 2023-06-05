import { assert as assertSuperstruct } from "superstruct";

export const assert: typeof assertSuperstruct = (value, struct, message) => {
  try {
    assertSuperstruct(value, struct, message);
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message);
    throw new Error("Unexpected error");
  }
};

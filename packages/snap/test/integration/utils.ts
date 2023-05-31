import { exec } from "child_process";
import path from "path";

export async function buildSnap(): Promise<string> {
  console.log(`Building my-snap...`);
  await new Promise((resolve, reject) => {
    exec(`yarn build`, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });

  return path.resolve();
}

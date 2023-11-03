import type { Block } from '@aleohq/sdk';

const BASE_URL = 'https://api.explorer.aleo.org/v1';

interface RequestOptions {
  signal?: AbortSignal;
}
async function request<Response>(
  url: `/${string}`,
  options: RequestOptions = {},
): Promise<Response> {
  const urlPath = new URL(`/v1/testnet3${url}`, BASE_URL);
  const response = await fetch(urlPath, options);
  const json = response.json();
  return json as Response;
}

export async function getLatestBlock(signal?: AbortSignal): Promise<Block> {
  return await request<Block>('/latest/block', { signal });
}

export async function getPublicBalance(userAddress: string): Promise<string> {
  return await request<string>(`/program/credits.aleo/mapping/account/${userAddress}`);
}

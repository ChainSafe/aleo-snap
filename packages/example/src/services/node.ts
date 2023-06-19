import { Block } from '@aleohq/sdk';

const BASE_URL = 'https://vm.aleo.org/';

interface RequestOptions {
  signal?: AbortSignal;
}
async function request<Response>(
  url: `/${string}`,
  options: RequestOptions = {},
): Promise<Response> {
  const urlPath = new URL(`/api/testnet3${url}`, BASE_URL);
  const response = await fetch(urlPath, options);
  const json = response.json();
  return json as Response;
}

export async function getLatestBlock(signal?: AbortSignal): Promise<Block> {
  return await request<Block>('/latest/block', { signal });
}

export async function getBlockRange(start: number, end: number): Promise<Block[]> {
  return await request<Block[]>(`/blocks?start=${start}&end=${end}`);
}

import { valueType } from 'antd/es/statistic/utils';
import CountUp from 'react-countup';

export const formatBalance = (value: number | string): number => {
  let formatedValue: number;
  const aleoDecimals = 10 ** 6;
  if (typeof value === 'string') {
    formatedValue = parseFloat(value.replace('u64', '')) / aleoDecimals;
  } else formatedValue = value / aleoDecimals;
  return formatedValue;
};

export const formatter = (value: valueType): JSX.Element => (
  <CountUp end={Number(value)} separator="," preserveValue />
);
export const balanceFormatter = (value: valueType): JSX.Element => (
  <CountUp end={formatBalance(value)} separator="," preserveValue />
);

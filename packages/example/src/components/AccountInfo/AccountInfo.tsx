import { Button, Card, Divider, Form, Input, Row, Col, Statistic } from 'antd';
import CountUp from 'react-countup';
import { valueType } from 'antd/es/statistic/utils';
import { CopyButton, formLayout } from '../utils';
import { useLatestBlockHeight } from '../../hooks/useLatestBlockHeight.ts';
import { useSnap } from '../../hooks/useSnap.ts';

const formatter = (value: valueType): JSX.Element => (
  <CountUp end={Number(value)} separator="," preserveValue />
);

export function AccountInfo(): JSX.Element {
  const block = useLatestBlockHeight();
  const { address, showViewKey, viewKey, balance, getBalance } = useSnap();

  return (
    <Card
      title="Account Info"
      style={{ width: '100%', borderRadius: '20px' }}
      bordered={false}
    >
      <Row align={'middle'} gutter={16}>
        <Col span={6}>
          <Statistic title="Balance" value={balance?.balance} formatter={formatter} />
        </Col>
        <Col span={6}>
          <Statistic
            title="Latest Sync Block"
            value={balance?.latestSyncBlock}
            precision={2}
            formatter={formatter}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Latest Block"
            value={block}
            precision={2}
            formatter={formatter}
          />
        </Col>
        <Col span={6}>
          <Button type="default" size="large" onClick={() => void getBalance()}>
            {balance === null ? 'Get Balance' : 'Refresh Balance'}
          </Button>
        </Col>
      </Row>
      <Divider />
      <Form {...formLayout}>
        <Form.Item label="Address" colon={false}>
          <Input
            size="large"
            placeholder="loading address..."
            value={address}
            addonAfter={<CopyButton data={address} />}
            disabled={!address}
          />
        </Form.Item>
        <Form.Item label="View Key" colon={false} style={{ marginBottom: 0 }}>
          <Form.Item style={{ display: 'inline-block', width: 'calc(100% - 88px)' }}>
            <Input
              size="large"
              placeholder="Hidden View Key"
              value={viewKey}
              addonAfter={viewKey && <CopyButton data={viewKey} />}
              disabled={!viewKey}
            />
          </Form.Item>
          <Form.Item
            name="vkb"
            style={{ display: 'inline-block', width: '80px', margin: '0 0 0 8px' }}
          >
            <Button size="large" style={{ width: 80 }} onClick={() => void showViewKey()}>
              Show
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </Card>
  );
}

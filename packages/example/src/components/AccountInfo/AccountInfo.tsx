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
  const { address } = useSnap();

  return (
    <Card
      title="Account Info"
      style={{ width: '100%', borderRadius: '20px' }}
      bordered={false}
    >
      <Row gutter={16}>
        <Col span={6}>
          <Statistic title="Balance" value={112893} formatter={formatter} />
        </Col>
        <Col span={6}>
          <Statistic
            title="Current Block"
            value={112893}
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
          <Statistic title="Status" value={'syncing'} />
        </Col>
      </Row>
      <Divider />
      <Form {...formLayout}>
        <Form.Item label="Address" colon={false}>
          <Input
            size="large"
            placeholder="Signature"
            value={address}
            addonAfter={<CopyButton data={address} />}
            disabled={!address}
          />
        </Form.Item>
        <Form.Item label="View Key" colon={false} style={{ marginBottom: 0 }}>
          <Form.Item
            name="wk"
            style={{ display: 'inline-block', width: 'calc(100% - 88px)' }}
          >
            <Input
              size="large"
              placeholder="Signature"
              value={'pkaaaa'}
              addonAfter={<CopyButton data={'signature'} />}
              disabled
            />
          </Form.Item>
          <Form.Item
            name="wkb"
            style={{ display: 'inline-block', width: '80px', margin: '0 0 0 8px' }}
          >
            <Button size="large" style={{ width: 80 }} onClick={() => {}}>
              Show
            </Button>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Private Key" colon={false} style={{ marginBottom: 0 }}>
          <Form.Item
            name="pk"
            style={{ display: 'inline-block', width: 'calc(100% - 88px)' }}
          >
            <Input
              size="large"
              placeholder="Signature"
              value={'pkaaaa'}
              addonAfter={<CopyButton data={'signature'} />}
              disabled
            />
          </Form.Item>
          <Form.Item
            name="pkw"
            style={{ display: 'inline-block', width: '80px', margin: '0 0 0 8px' }}
          >
            <Button size="large" style={{ width: 80 }} onClick={() => {}}>
              Show
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </Card>
  );
}

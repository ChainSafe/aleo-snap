import { Button, Card, Col, List, Popover, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';
import copyToClipboard from 'copy-to-clipboard';
import { useSnap } from '../../hooks/useSnap';

export type TransferFormData = {
  recipientAddress: string;
  amount: number;
  amountRecord: string;
  fee: number;
  feeRecord: string;
  privateKey: string;
  peerUrl: string;
};

export function GetRecords(): JSX.Element {
  const { showRecords, records } = useSnap();
  const [dataList, setDataList] = useState<string[]>([]);
  const [recordHoverText, setRecordHoverText] = useState<string>('Copy');

  useEffect(() => {
    if (recordHoverText === 'Copied!') {
      setTimeout(() => {
        setRecordHoverText('Copy');
      }, 500);
    }
  }, [recordHoverText]);

  useEffect(() => {
    if (records !== null) {
      const recordList = records.records.map((record) => record.value);
      setDataList(recordList);
    }
  }, [records]);
  return (
    <Card
      title="Records"
      style={{ width: '100%', borderRadius: '20px' }}
      bordered={false}
    >
      <Row align={'middle'} justify={'center'}>
        <Col span={12}>
          <Button
            size="large"
            onClick={() => void showRecords()}
            style={{ marginBottom: '20px' }}
          >
            Get Records
          </Button>
        </Col>
        <Col span={12}>
          <Statistic title="Latest Sync Block" value={records?.latestSyncBlock} />
        </Col>
      </Row>
      <List
        size="large"
        bordered
        dataSource={dataList}
        renderItem={(item) => (
          <Popover content={recordHoverText} trigger="hover">
            <List.Item
              onClick={() => {
                void copyToClipboard(item);
                setRecordHoverText('Copied!');
              }}
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              {item}
            </List.Item>
          </Popover>
        )}
      />
    </Card>
  );
}

import { Card, Divider, Form, Input } from 'antd';
import { CopyButton, formLayout } from '../utils';

export function SignMessage(): JSX.Element {
  return (
    <Card
      title="Sign a Message"
      style={{ width: '100%', borderRadius: '20px' }}
      bordered={false}
    >
      <Form {...formLayout}>
        <Form.Item label="Message" colon={false}>
          <Input
            name="Message"
            size="large"
            placeholder="Message"
            value={'Messege'}
            allowClear={true}
            onChange={() => {}}
          />
        </Form.Item>
      </Form>
      <Form {...formLayout}>
        <Divider />
        <Form.Item label="Signature" colon={false}>
          <Input
            size="large"
            placeholder="Signature"
            value={'signature'}
            addonAfter={<CopyButton data={'signature'} />}
            disabled
          />
        </Form.Item>
      </Form>
    </Card>
  );
}

import {Button, Card, Form, Input} from "antd";
import {formLayout} from "../utils";

export function TransferFunds (): JSX.Element {
  return <Card title="Transfer Funds" style={{width: "100%", borderRadius: "20px"}}
               bordered={false}>
    <Form {...formLayout}>
      <Form.Item label="Recipient Address" colon={false}>
        <Input name="Message" size="large" placeholder="Message" value = {"Messege"}
               allowClear = {true} onChange={() => {}}/>
      </Form.Item>
      <Form.Item label="Amount" colon={false}>
        <Input name="Message" size="large" placeholder="Message" value = {"Messege"}
               allowClear = {true} onChange={() => {}}/>
      </Form.Item>
      <Form.Item label="Amount Record" colon={false}>
        <Input name="Message" size="large" placeholder="Message" value = {"Messege"}
               allowClear = {true} onChange={() => {}}/>
      </Form.Item>
      <Form.Item label="Fee" colon={false} style={{ marginBottom: 0 }}>
        <Form.Item
          name="wk"
          style={{ display: 'inline-block', width: 'calc(100% - 88px)' }}
        >
          <Input size="large" placeholder="Signature" value={"pkaaaa"} />
        </Form.Item>
        <Form.Item
          name="wkb"
          style={{ display: 'inline-block', width: "80px", margin: '0 0 0 8px' }}
        >
          <Button size="large" style={{ width: 80 }} onClick={() => {}}>
            Fetch
          </Button>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Fee Record" colon={false}>
        <Input name="Message" size="large" placeholder="Message" value = {"Messege"}
               allowClear = {true} onChange={() => {}}/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 3 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Card>
}
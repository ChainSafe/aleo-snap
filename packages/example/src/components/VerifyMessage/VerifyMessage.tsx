import {Card, Form, Input} from "antd";
import {formLayout} from "../utils";

export function VerifyMessage(): JSX.Element {

  return <Card title="Verify a Message" style={{width: "100%", borderRadius: "20px"}}
               bordered={false}>
    <Form {...formLayout}>
      <Form.Item label="Message" colon={false}>
        <Input name="Message" size="large" placeholder="Message" value={"meow meow"}
               onChange={() => {}} />
      </Form.Item>
      <Form.Item
        label="Signature"
        colon={false}
        hasFeedback
        validateStatus={"warning"}>
        <Input name="Signature" size="large" placeholder="Signature" value={"wau wau"}
               onChange={() => {}}/>
      </Form.Item>

    </Form>
  </Card>
}
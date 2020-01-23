import React from "react"
import { Form, Input, Checkbox } from "antd"
import { withRouter } from "react-router-dom"
// Custom components
import { StyledText } from "../../Styling"

class GameIdentityForm extends React.Component {

  render = () => {
    const { getFieldDecorator } = this.props.form
    return(
      <Form>
        <Form.Item style={{ margin: "10px 0" }}>
          {getFieldDecorator('namn', {
            rules: [
              {
                required: true,
                message: 'Ange spelets namn.',
              },
            ],
          })(
            <Input
              style={{ width: "100%" }}
              autoComplete="off"
              placeholder="Spelets namn"
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: "10px 0" }}>
          {getFieldDecorator('organisation', {
            rules: [
              {
                required: true,
                message: 'Ange namnet av din förening eller skola',
              },
            ],
          })(
            <Input
              style={{ width: "100%" }}
              autoComplete="off"
              placeholder="Din förening eller skola"
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: 0 }}>
          {getFieldDecorator('email', {
            valuePropName: 'sendCodeViaEmail',
            initialValue: false,
          })(
            <Checkbox>Skicka kod till detagares email</Checkbox>
          )}
        </Form.Item>
        <Form.Item style={{ margin: 0 }}>
          {getFieldDecorator('klass', {
            valuePropName: 'showPlayerClass',
            initialValue: true,
          })(
            <Checkbox>Visa vilken klass en detagare går i</Checkbox>
          )}
        </Form.Item>
      </Form>
    )
  }
}

export default withRouter(Form.create()(GameIdentityForm))

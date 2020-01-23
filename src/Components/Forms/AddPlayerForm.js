import React from "react"
import { Form, Input, Checkbox } from "antd"
import { withRouter } from "react-router-dom"
// Custom components
import { StyledText } from "../../Styling"

class AddPlayerForm extends React.Component {

  render = () => {
    const { getFieldDecorator } = this.props.form
    return(
      <Form style={{textAlign: "left"}}>
        <Form.Item style={{ margin: "10px 0" }}>
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Ange spelaren namn.',
              },
            ],
          })(
            <Input
              style={{ width: "100%" }}
              autoComplete="off"
              placeholder="Spelarens namn"
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: "10px 0" }}>
          {getFieldDecorator('class', {
            rules: [
              {
                required: true,
                message: 'Ange spelarens klass',
              },
            ],
          })(
            <Input
              style={{ width: "100%" }}
              autoComplete="off"
              placeholder="Ange spelarens klass"
            />
          )}
        </Form.Item>
        <Form.Item style={{ margin: "10px 0" }}>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Ange spelarens email',
              },
            ],
          })(
            <Input
              style={{ width: "100%" }}
              autoComplete="off"
              placeholder="Ange spelarens email"
            />
          )}
        </Form.Item>
      </Form>
    )
  }
}

export default withRouter(Form.create()(AddPlayerForm))

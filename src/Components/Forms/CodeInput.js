import React from "react"
import { Form, Input } from "antd"
import { withRouter } from "react-router-dom"
// Custom components
import { StyledText } from "../../Styling"

const codeLength = 6

class CodeInput extends React.Component {

  // When the player enters their full code it is validated here
  // If the code is valid, the player is redirected to the correct page
  validateCode = async (rule, value, callback) => {
    if(value.length >= codeLength){
      // TODO: Check if the inserted code is right
      if(value === "abcdef"){
        this.props.history.push(this.props.to)
      }else{
        callback("This code is invalid, try again")
      }
    }
  }

  render = () => {
    const { getFieldDecorator } = this.props.form

    return(
      <Form>
        <StyledText>
          { this.props.description }
        </StyledText>
        <Form.Item>
          {getFieldDecorator('code', {
            rules: [{validator: this.validateCode}]
          })(

            <Input
              style={{
                width: "100%",
                textAlign: 'center',
                letterSpacing: 4,
                fontSize: 20,
              }}
              autoComplete="off"
              maxLength={codeLength}
              size="large"
              placeholder="• • • • • •"
            />

          )}
        </Form.Item>
      </Form>
    )
  }
}

export default withRouter(Form.create()(CodeInput))

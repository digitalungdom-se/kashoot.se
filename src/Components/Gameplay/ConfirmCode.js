import React, {useState} from 'react'
import { Modal, Button } from 'antd'
// Custom components
import { CodeInput } from "../Forms"

const ConfirmCode = ({ buttonDescription, inputDescription }) => {
  const [visible, showModal] = useState(false)
  const onCancel = () => showModal(false);
  const onConfirm = () => showModal(false);

  return (
    <>
			<Button
        onClick = {()=> {showModal(true)}}
        size="large"
        style={{width: "48%"}}
      >
        { buttonDescription }
			</Button>

      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
      >
      <CodeInput description={inputDescription}/>
        confirm
      </Modal>
    </>
  )
}

export default ConfirmCode

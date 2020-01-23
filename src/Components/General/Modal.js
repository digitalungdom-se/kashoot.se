import React, { createRef } from 'react'
import { Modal, Col, Row, Button, Input } from 'antd'
// Custom components
import { StyledTitle, StyledText } from "../../Styling"

function KashootModal({
  visible = false,
  handleCancel = () => {},
  handleConfirm = () => {},
  title = "",
  description = "",
  cancelText = "Avbryt",
  confirmText = "Bekräfta",
  showInput = false,
  maxWidth,
  handleInput = () => {},
  onCancel = () => {},
  onConfirm = () => {},
  modalType,
  children
}) {

  const inputRef = createRef()

  return (
      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
        style={{textAlign: "center", maxWidth:maxWidth?maxWidth:null}}
      >
        <StyledTitle
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: -9,
            marginBottom: 0
          }}
        >
          {title}
        </StyledTitle>

     <StyledText>{description}</StyledText>
     {
      showInput &&
      <Input
        ref={inputRef}
        style={{ marginBottom: description ? 24 : 0  }}
      />
     }
     {children}
     {
       modalType === "confirmOnly"?
       (
         <Row type="flex" justify="end">
           <Col>
             <Button
               style={{width: "100%"}}
               onClick={() => {
                onConfirm()
              }}
             >
               {confirmText}
             </Button>
           </Col>
         </Row>
       )
       :
       (
         <Row type="flex" justify="center" gutter={16}>
           <Col span={12}>
             <Button
               style={{width: "100%"}}
               onClick={() => {
                onCancel()
                onConfirm()
              }}
             >
               {cancelText}
             </Button>
           </Col>

           <Col span={12}>
             <Button
               style={{width: "100%"}}
               type="danger"
               onClick={() =>
                 {
                   onConfirm()
                   if(showInput) {
                     handleConfirm(inputRef.current.input.value)
                   }else{
                     handleConfirm()
                   }
                 }
               }>
               {confirmText}
             </Button>
           </Col>
         </Row>
       )
     }
    </Modal>
  )
}

export default KashootModal

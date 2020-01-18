import React, { createRef } from 'react'
import { Modal, Col, Row, Button, Input } from 'antd'

function KashootModal({
  visible = false,
  handleCancel = () => {},
  handleConfirm = () => {},
  title = "",
  description = "",
  cancelText = "Avbryt",
  confirmText = "Bekräfta",
  showInput = false,
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
       style={{textAlign: "center", maxWidth: 300}}
     >
       <h1 style={{fontSize: 18, fontWeight: 'bold', marginTop: -8}}>{title}</h1>

       <p>{description}</p>
       {
        showInput &&
        <Input
          ref={inputRef}
          style={{
            marginBottom: 24
          }}
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
                    if(showInput) handleConfirm(inputRef.current.input.value);
                    else handleConfirm();
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

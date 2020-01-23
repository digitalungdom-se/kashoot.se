// Third party components
import React from "react"
import { Col, Row } from "antd"
// Custom components
import { StyledTitle, StyledText } from "../../Styling"
import { GameIdentityForm, RulesForm } from "../Forms"

const CreateGameModal = ({createModalVisible, showCreateModal}) => {

  return(
    <Row style={{textAlign: "left"}}>
      <Col>
        <StyledTitle style={{margin: 0}}>
          Grundinställningar
        </StyledTitle>
        <StyledText>
          Dessa inställningar kan du inte ändra senare.
        </StyledText>
        <GameIdentityForm/>
      </Col>
      <Col>
        <StyledTitle style={{margin: 0}}>
          Regler
        </StyledTitle>
        <StyledText>
          Dessa regler kan du ändra senare. Aktivera regler genom
          att trycka på rutan brevid dess titel.
        </StyledText>
        <RulesForm/>
      </Col>
    </Row>
  )
}

export default CreateGameModal

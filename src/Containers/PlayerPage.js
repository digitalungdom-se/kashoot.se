import React from "react"
import { Row, Col, Button } from "antd"
// Custom components
import {
  Emoji,
  AlignCenter,
  VerticalLine
} from "../Components/General"
import {
  TransparentDiv,
  StyledTitle,
  graphicProfile
} from "../Styling"
import { ConfirmCode } from "../Components/Gameplay"

const PlayerPage = () => {

  // TODO: Replace this placeholder
  const targetName = "Kelvin John"

  return(
    <AlignCenter>
      <Col
        xs={22}
        sm={16}
        md={13}
        lg={11}
        xl={8}
      >
        <TransparentDiv
          style={{
            color: graphicProfile.colors.black,
            border: "1px solid",
            borderColor: graphicProfile.colors.lightGrey,
            marginTop: 50,
            paddingBottom: 20
          }}
        >
          <StyledTitle
            style={{
              color: graphicProfile.colors.mainRed,
              marginBottom: 4,
              fontSize: 22,
            }}
          >
            <Emoji emoji="🐺"/>Välkommen tillbaka<Emoji emoji="🦈"/>
          </StyledTitle>
          <p
            style={{
              marginTop: -4,
              color: graphicProfile.colors.grey
            }}
          >
            Du ska fånga...
          </p>
          <StyledTitle
            style={{
              fontSize: 38,
              color: "black",
              marginTop: -6
            }}
          >
            {targetName}
          </StyledTitle>

          <VerticalLine dark={true}/>

          <p
            style={{
              marginTop: 10,
              color: graphicProfile.colors.grey
            }}
          >
            Har du lyckas fånga någon eller själv blivit fångad?
            Tryck en av det nedanstående knapparna.
          </p>
          <Row
            type="flex"
            justify="space-between"
            style={{marginTop: 20}}
          >
            <ConfirmCode
              buttonDescription={"Jag har fångat"}
              inputDescription={"Ange koden av personen du fångat"}
              />
            <ConfirmCode
            buttonDescription={"Jag blev fångad"}
            inputDescription={"Ange koden av personen som fångade dig"}
            />
          </Row>

        </TransparentDiv>
      </Col>
    </AlignCenter>
  )
}

export default PlayerPage

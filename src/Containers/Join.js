import React from "react"
import { Row, Col } from "antd"
import { NavLink } from "react-router-dom"
// Custom components
import { StyledTitle, graphicProfile } from "../Styling"
import {
  AlignCenter,
  BrightContainer
} from "../Components/General"
import { CodeInput } from "../Components/Forms"

const Join = () => {
  return(
    <BrightContainer style={{marginTop: "10vh"}}>
      <StyledTitle
        style={{
          marginBottom: 4,
          color: graphicProfile.colors.mainRed
        }}
      >
        Delta i ett spel
      </StyledTitle>
      <CodeInput
        to="/player-page"
        description={
          "Ange din sexsiffriga kod som du " +
          "fått av ditt spels arrangör."
        }
      />
      <div
        style={{
          textAlign: "left",
          opacity: 0.6,
          fontSize: 12,
        }}
      >
        <Row
          type="flex"
          justify="center"
          style={{marginBottom: 16, marginRight: 20}}
        >
          <NavLink
            to={"/signup"}
            style={{
              color: graphicProfile.colors.black,
              fontWeight: "bold",
            }}
          >
            Skapa ett spel
          </NavLink>
          <p style={{margin: "1px 10px"}}>
            •
          </p>
          <NavLink
            to={"/login"}
            style={{
              color: graphicProfile.colors.black,
              fontWeight: "bold",
            }}
          >
            Logga in
          </NavLink>
        </Row>
      </div>
    </BrightContainer>
  )
}

export default Join

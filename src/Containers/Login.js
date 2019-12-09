import React from "react"
import { NavLink } from "react-router-dom"
import { Row } from "antd"
// Custom components
import {
  BrightContainer,
  DUAuthButton
} from "../Components/General"
import { StyledTitle, graphicProfile } from "../Styling"

const Login = () => {
  return(
    <BrightContainer>
      <StyledTitle
        style={{
          color: graphicProfile.colors.mainRed,
          marginBottom: 4
        }}
      >
        Välkommen tillbaka
      </StyledTitle>
      <p>
        Logga in med ditt Digital Ungdom konto för att
        enkelt skapa ett spel, se statistik och mycket mer.
      </p>
      <DUAuthButton
        href="https://digitalungdom.se/kashoot/logga-in"
        text="Logga in med Digital Ungdom"
      />

        <Row
          type="flex"
          justify="center"
          style={{marginRight: 12}}
        >
          <p style={{marginRight: 4}}>
            Saknar du ett konto?
          </p>
          <NavLink to={"/signup"}>
          <p style={{
              color: graphicProfile.colors.mainRed,
              fontWeight: "bold",
            }}>
              Skapa ett
            </p>
          </NavLink>
        </Row>
    </BrightContainer>
  )
}

export default Login

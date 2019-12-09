import React from "react"
import { NavLink } from "react-router-dom"
import { Row } from "antd"
// Custom components
import {
  BrightContainer,
  DUAuthButton
} from "../Components/General"
import { StyledTitle, graphicProfile } from "../Styling"

const SignUp = () => {
  return(
    <BrightContainer>
      <StyledTitle
        style={{
          color: graphicProfile.colors.mainRed,
          marginBottom: 4
        }}
      >
        Bli arrangör
      </StyledTitle>
      <p>
        Skapa ett konto hos Digital Ungdom - vår ideala
        ungdomsorganisation - för att bli spelledare för
        obegränsat antal spel, helt gratis.
      </p>

      <DUAuthButton
        href="https://digitalungdom.se/kashoot/bli-medlem"
        text="Bli arrangör med Digital Ungdom"
      />

        <Row
          type="flex"
          justify="center"
          style={{marginRight: 12}}
        >
          <p style={{marginRight: 4}}>
            Har du redan ett konto?
          </p>
          <NavLink to={"/login"}>
            <p
              style={{
                color: graphicProfile.colors.mainRed,
                fontWeight: "bold",
              }}
            >
              Logga in
            </p>
          </NavLink>
        </Row>
    </BrightContainer>
  )
}

export default SignUp

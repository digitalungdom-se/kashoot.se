import React from "react"
import { NavLink } from "react-router-dom"
import { Row } from "antd"
// Custom components
import { DUAuthButton } from "../Components/General"
import { BrightWrapper } from "../Wrappers"
import { StyledTitle, StyledText, graphicProfile } from "../Styling"

const SignUp = () => {
  return(
    <BrightWrapper>
      <StyledTitle
        style={{
          color: graphicProfile.colors.mainRed,
          marginBottom: 4
        }}
      >
        Bli arrangör
      </StyledTitle>
      <StyledText>
        Skapa ett konto hos Digital Ungdom - vår ideala
        ungdomsorganisation - för att bli spelledare för
        obegränsat antal spel, helt gratis.
      </StyledText>

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
    </BrightWrapper>
  )
}

export default SignUp

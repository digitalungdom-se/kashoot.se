import React from "react"
import { NavLink } from "react-router-dom"
import { Row } from "antd"
// Custom components
import { DUAuthButton } from "../Components/General"
import { BrightWrapper } from "../Wrappers"
import { StyledTitle, Theme, graphicProfile } from "../Styling"
import { lightTheme } from "../Styling/Themes"

const Login = () => {
  return(
    <Theme theme={lightTheme}>
      <BrightWrapper>
        <StyledTitle style={{marginBottom: 4}}>
          Välkommen tillbaka
        </StyledTitle>
        <p>
          Som arrangör, logga in  här med ditt Digital Ungdom konto för att
          skapa ett spel, se statistik och mycket mer.
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
      </BrightWrapper>
    </Theme>
  )
}

export default Login

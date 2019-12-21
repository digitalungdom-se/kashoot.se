import React from "react"
import { Row, Col, Button } from "antd"
// Custom components
import {
  StyledBrightDiv,
  StyledTitle,
  graphicProfile
} from "../../Styling"
import { VerticalLine, AlignCenter } from "../General"

const Home = () => {
  return(
    <StyledBrightDiv
      style={{
        marginTop: 40
      }}
    >
      <AlignCenter>
        <StyledTitle
          style={{
            color: graphicProfile.colors.black,
            width: "100%"
          }}
        >
          Vad är Killer.Games?
        </StyledTitle>
        <div>
          <p style={{fontSize: 16, width: "60%", margin: "auto"}}>
            Killer.Games är en gratis tjänst för dig som vill
            spela det klassiska spelet "killer game" - att skapa
            och spela ett spel är otroligt enkelt:
          </p>
        </div>
      </AlignCenter>
    </StyledBrightDiv>
  )
}

export default Home

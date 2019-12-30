import React from "react"
import { Row, Col } from "antd"
import { NavLink } from "react-router-dom"
// Custom components
import { HowToPlay as Instructions } from "../Components/Home"
import { BrightWrapper} from "../Wrappers"
import { CodeInput } from "../Components/Forms"
import { StyledTitle, Theme, graphicProfile } from "../Styling"
import { lightTheme } from "../Styling/Themes"

const HowToPlay = () => {
  return(
    <Theme theme={lightTheme}>
      <Instructions/>
    </Theme>
  )
}

export default HowToPlay

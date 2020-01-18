import React from "react"
// Custom components
import { HowToPlay as Instructions } from "../Components/Home"
import { Theme } from "../Styling"
import { lightTheme } from "../Styling/Themes"

const HowToPlay = () => {
  return(
    <Theme theme={lightTheme}>
      <Instructions/>
    </Theme>
  )
}

export default HowToPlay

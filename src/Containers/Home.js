import React from "react"
// Custom components
import { Welcome, HowToPlay } from "../Components/Home"
import { Theme } from "../Styling"
import { lightTheme, redTheme } from "../Styling/Themes"

const Home = () => {
  return(
    <>
      <Theme theme={redTheme}>
        <Welcome/>
      </Theme>
      <Theme theme={lightTheme}>
        <HowToPlay/>
      </Theme>
    </>
  )
}

export default Home

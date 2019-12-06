import React from "react"
import { ThemeProvider } from "styled-components"
// Custom components
import { graphicProfile } from "./"

const Theme = ({ children }) => (
  <ThemeProvider theme={graphicProfile}>
    {children}
  </ThemeProvider>
)

export default Theme

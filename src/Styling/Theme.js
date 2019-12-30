// Third party
import React from "react"
import { ThemeProvider } from "styled-components"

// Reusable component whenever a new theme is needed
const Theme = ({ theme, children }) => {
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>  
  )
}

export default Theme

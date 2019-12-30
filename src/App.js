import React from "react";
// Custom components
import Router from "./Routes/Router"
import GlobalStyles from "./Styling/GlobalStyles"
import { Loading } from "./Components/General"
import { Theme } from "./Styling"
import { lightTheme } from "./Styling/Themes"


const App = () => {
  return (
    <Theme theme={lightTheme}>
      <React.Suspense fallback={<Loading logo/>}>
        <GlobalStyles/>
        <Router/>
      </React.Suspense>
    </Theme>
  )
}

export default App

import React from "react";

import Router from "./Routes/Router"
import { Loading } from "./Components/General"
import { Theme } from "./Styling"

const App = () => {
  return (
    <Theme>
      <React.Suspense fallback={<Loading logo/>}>
        <Router/>
      </React.Suspense>
    </Theme>
  )
}

export default App

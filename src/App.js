import React from 'react';
//
import Router from './Routes/Router'
import { Loading } from './Components/General'

const App = () => {
  return (
    <React.Suspense fallback={<Loading logo/>}>
      <Router/>
    </React.Suspense>
  )
}

export default App

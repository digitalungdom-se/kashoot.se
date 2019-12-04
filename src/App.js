import React from 'react';
//
import Router from './routes/Router'
import { Loading } from './components/general'

const App = () => {
  return (
    <React.Suspense fallback={<Loading logo/>}>
      <Router/>
    </React.Suspense>
  )
}

export default App

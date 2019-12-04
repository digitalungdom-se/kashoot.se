// Third party
import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
// Custom components
import { Loading } from "../components/general"
import { Header, Footer } from "../containers"
// Lazy loading
const Home = lazy(() => import('../containers/Home.js'))

const Boiler = () => {
	return (
		<div>
			<Header/>
			<Suspense fallback={<Loading spin />}>
				<Switch>
					<Route
						path="/"
            exact
						render={props => <Home {...props}/>}
					/>
				</Switch>
			</Suspense>
			<Footer/>
		</div>
	)
}

export default Boiler

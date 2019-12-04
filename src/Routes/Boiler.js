// Third party
import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
// Custom components
import { Loading } from "../Components/General"
import { Header, Footer } from "../Containers"
// Lazy loading
const Home = lazy(() => import('../Containers/Home.js'))

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
